const post = (model) => async (req, res) => {
	try {
		const item = await model.create(req.body);

		return res.status(201).send({ item });
	} catch (e) {
		return res.status(500).json({ status: "failed", message: e.message });
	}
};

const getAll = (model) => async (req, res) => {
	try {
		const item = await model.find().lean().exec();

		return res.status(201).send({ item });
	} catch (e) {
		return res.status(500).json({ status: "failed", message: e.message });
	}
};

const getOne = (model) => async (req, res) => {
	try {
		const item = await model.findById(req.params.id).lean().exec();

		return res.status(201).send({ item });
	} catch (e) {
		return res.status(500).json({ status: "failed", message: e.message });
	}
};

const updateOne = (model) => async (req, res) => {
	try {
		const item = await model
			.findByIdAndUpdate(req.params.id, req.body, { new: true })
			.lean()
			.exec();

		return res.status(201).send({ item });
	} catch (e) {
		return res.status(500).json({ status: "failed", message: e.message });
	}
};

const deleteOne = (model) => async (req, res) => {
	try {
		const item = await model.findByIdAndDelete(req.params.id).lean().exec();

		return res.status(201).send({ item });
	} catch (e) {
		return res.status(500).json({ status: "failed", message: e.message });
	}
};

module.exports = {
	post,
	getAll,
	getOne,
	updateOne,
	deleteOne,
};
