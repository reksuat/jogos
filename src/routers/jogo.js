const express = require("express");
const estudioControllers = require("../controllers/jogo");
const router = express()

router.get("/", (req,res) =>{
    res.json(estudioControllers.index())
})
router.get("/:id", (req,res) => {
    res.json(estudioControllers.show(req.params.id))
})
router.post("/", (req,res) => {
    const code = estudioControllers.create(req.body)
    res.status(code).json
})
router.put("/:id", (req,res) => {
    const code = estudioControllers.update(req.params.id, req.body)
    res.status(code.json)
})
router.delete("/:id", (req,res) => {
    res.json(estudioControllers.destroy(req.params.id))

})
module.exports = router