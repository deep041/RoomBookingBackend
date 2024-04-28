const booking = require('../modals').Bookings;

const bookRoom = async (req, res) => {
    booking.insertMany(req.body).then((result, err) => {
        if (result) {
            req.app.get('io').emit('callListAPI', true);
            res.send({message: 'Room Booked Successfully', data: result, status: 200, isShowMessage: true});
        } 
        
        if (err) {
            res.send({message: 'Something Broken', data: err, status: 400, isShowMessage: true});
        }
    });
}

module.exports = { bookRoom };