const router = require("express").Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

router.get("/companies", async (req, res) => {
  const findCompanies = await prisma.company.findMany({});
  res.json(findCompanies.map(el=>el.name)) //return names of companies
});

router.get("*", (req, res) => {
  res.status(404).send("Route not found");
});

module.exports = router;
