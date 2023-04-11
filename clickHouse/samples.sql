DROP DATABASE IF EXISTS sgd SYNC;
CREATE DATABASE sgd;

CREATE TABLE sgd.samples (
    age UInt8,
    workclass LowCardinality(String),
    fnlwgt UInt32,
    education LowCardinality(String),
    educationNum UInt8,
    maritalStatus LowCardinality(String),
    occupation LowCardinality(String),
    relationship LowCardinality(String),
    race LowCardinality(String),
    sex LowCardinality(String),
    capitalGain UInt32,
    capitalLoss UInt32,
    hoursPerWeek UInt32,
    nativeCountry LowCardinality(String),
    income LowCardinality(String),
    dt DateTime DEFAULT now()
)
ENGINE = MergeTree
ORDER BY dt;

CREATE TABLE sgd.weights (
    column String,
    w Float64
)
ENGINE = SummingMergeTree
ORDER BY column;

CREATE MATERIALIZED VIEW sgd.update_weights TO sgd.weights AS (
    WITH sum(x * w0) OVER () AS wTx
    SELECT
        column,
        - 0.01 * (1/(1+exp(-wTx)) - y) * x as w
    FROM (
        SELECT
            dt,
            key column,
            value x,
            y
        FROM
        (
            SELECT
                dt,
                income = '>50K' y,
                ['intercept', 'age', 'fnlwgt', 'educationNum', 'capitalGain', 'capitalLoss', 'hoursPerWeek'] keys,
                [1, age, fnlwgt, educationNum, capitalGain, capitalLoss, hoursPerWeek] values
            FROM sgd.samples
        )
        ARRAY JOIN
            keys AS key,
            values AS value
    )
    ANY LEFT JOIN (
        SELECT column, w w0 FROM sgd.weights FINAL
    ) USING column
);