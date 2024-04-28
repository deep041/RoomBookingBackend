const room = require('../modals').Room;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const express = require('express');
const app = express();

const getAllRoom = async (req, res) => {
    // pipeline: [
    //     { "$match": { "sessionId": new ObjectId(req.body.sessionId) } }
    // ],
    let matchValues = {};
    let searchText = '';
    let capacity = 0;
    if (req.body.isProjector !== undefined) matchValues.isProjector = req.body.isProjector;
    if (req.body.isLargeScreen !== undefined) matchValues.isLargeScreen = req.body.isLargeScreen;
    if (req.body.isSound !== undefined) matchValues.isSound = req.body.isSound;
    if (req.body.searchText !== undefined) searchText = req.body.searchText;
    if (req.body.capacity !== undefined) capacity = req.body.capacity;
    room.aggregate(
        [
            {
                $match: {
                    $or: [
                        { "name": { "$regex": searchText, "$options": 'i' } }
                    ],
                    "capacity": { $gte: capacity }
                }
            },
            {
                $lookup: { 
                    from: "tags", 
                    localField: "_id", 
                    foreignField: "roomId",
                    pipeline: [
                        {
                            $match: matchValues
                        }
                    ],
                    as: "facilities"
                }
            },
            {
                $unwind: '$facilities' 
            },
            { 
                $lookup: { 
                    from: "bookings", 
                    localField: "_id", 
                    foreignField: "roomId",
                    as: "bookings"
                }
            }
        ]
    ).then((result, err) => {
        if (result) {
            res.send({message: 'Data retrieved successfully', data: result, status: 200, isShowMessage: false});
        } 
        
        if (err) {
            res.send({message: 'Something Broken', data: err, status: 400, isShowMessage: true});
        }
    });
};

module.exports = { getAllRoom };