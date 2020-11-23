const express=require('express');
const router=express.Router();
const cpaas_use_cases= require('../models/useCasesModel');

router.route('/').get((req, res) => {
    cpaas_use_cases.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
})


module.exports=router;