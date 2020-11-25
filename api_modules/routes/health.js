const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        Git_Hash: process.env.npm_package_git_hash,
        App_Name: process.env.npm_package_name,
        Version: process.env.npm_package_version
        
    
    });
});
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Server POST is A OK!'
    });
});

module.exports = router;