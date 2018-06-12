'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const studentdata
    = [
        {
            id: 1,
            name: 'john',
            age: 20,
        },
{
            id: 2,
            name: 'rohit',
            age: 18,
        },
    {
            id: 3,
            name: 'Rock',
            age: 21,
        },
        {
            id: 4,
            name: 'shawn',
            age: 23,
        }
    ];
    app.get('/api/student', (req, resp) => {
        resp.json(studentdata);
    });
    app.post('/api/student',(req,res)=>{
        const student={
        id:studentdata.length+1,
        name:req.body.name,
        age:req.body.age
    };
    studentdata.push(student);
    res.json(student.id);
    });

    app.delete('/api/student/:id',(req,res)=>{
       const a=parseInt(req.params.id);
       const b=studentdata.findIndex(student=> student.id === a);
       studentdata.splice(b,1);
       res.json(a);   
    }) ;
    app.listen(5000);

   