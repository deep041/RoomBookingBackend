const sessionModal = require('../modals').Session;

const addSession = async (req, res) => {
    let { session } = req.body;
    session = session.trim()
    sessionModal.create({ session }).then((result, err) => {
        if (result) {
            res.status(200).send({ message: 'Data retrieved successfully', data: result, status: 200, isShowMessage: false });
        } 
        
        if (err) {
            res.status(201).send({ message: 'Something Broken', data: err, status: 200, isShowMessage: true });
        }
    });
}

const getSession = async (req, res) => {
    const sessionId = req.header('Session');
    sessionModal.findOne({ session: sessionId }).then((result, err) => {
        if (result) {
            res.status(200).send({ message: 'Data retrieved successfully', data: result, status: 200, isShowMessage: false });
        } 
        
        if (err) {
            res.status(200).send({ message: 'Something Broken', data: {}, status: 200, isShowMessage: true });
        }
    });
}

module.exports = { addSession, getSession };