const express = require("express")

const SkillCtrl = require("../controllers/skill_ctrl")

const router = express.Router()

router.post('/skill', SkillCtrl.createSkill)
router.put('/skill/:id',SkillCtrl.updateSkill)
router.delete('/skill/:id', SkillCtrl.deleteSkill)
router.get('/skill/:id', SkillCtrl.getSkillById)
router.get('/skills', SkillCtrl.getSkills)

module.exports = router