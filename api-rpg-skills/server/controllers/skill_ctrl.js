const Skill = require("../../models/skills_model")

createSkill = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Skill',
        })
    }

    const skill = new Skill(body)

    if (!skill) {
        return res.status(400).json({ success: false, error: err })
    }

    skill
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: skill._id,
                message: 'Skill created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Skill not created!',
            })
        })
}

updateSkill = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Skill.findOne({ _id: req.params.id }, (err, skill) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Skill not found!',
            })
        }
        skill.name = body.name
        skill.time = body.time
        skill.rating = body.rating
        skill
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: skill._id,
                    message: 'Skill updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Skill not updated!',
                })
            })
    })
}

deleteSkill = async (req, res) => {
    await Skill.findOneAndDelete({ _id: req.params.id }, (err, skill) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!skill) {
            return res
                .status(404)
                .json({ success: false, error: `Skill not found` })
        }

        return res.status(200).json({ success: true, data: skill })
    }).catch(err => console.log(err))
}

getSkillById = async (req, res) => {
    await Skill.findOne({ _id: req.params.id }, (err, skill) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!skill) {
            return res
                .status(404)
                .json({ success: false, error: `Skill not found` })
        }
        return res.status(200).json({ success: true, data: skill })
    }).catch(err => console.log(err))
}

getSkills = async (req, res) => {
    await Skill.find({}, (err, skills) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!skills.length) {
            return res
                .status(404)
                .json({ success: false, error: `Skill not found` })
        }
        return res.status(200).json({ success: true, data: skills })
    }).catch(err => console.log(err))
}

module.exports = {
    createSkill,
    updateSkill,
    deleteSkill,
    getSkills,
    getSkillById,
}