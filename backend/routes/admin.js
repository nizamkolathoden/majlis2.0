const router = require('express').Router();
//middleware 
const requirelogin = require('../middleware/index')

//student database
const Student = require('../model/student');

//teacher DB
const Teacher = require('../model/teacher');

//question DB
 const Question = require('../model/question');
const teacher = require('../model/teacher');

//@desc for post student data to admin
//@route post /admin/poststudent
router.post('/poststudent', (req, res) => {
    const { name, batch, admno, sem } = req.body;

    if (!name || !batch || !admno || !sem) return res.json({ error: 'enter all fields' });

    Student.findOne({ admno: admno }).then(existingUser => {
        if (existingUser) {
            return res.json({ error: 'user all ready exist' })
        } else {
            new Student({
                name,
                batch,
                admno,
                sem
            }).save().then(data => {
                console.log(data);
                return res.json(data)
            })
        }
    })



})
//@desc for post teacher data to admin
//@route post /admin/post/teacher
router.post('/post/teacher', (req, res) => {
    const { name } = req.body;
    if (!name) return res.json({ error: 'fill all fields' });
    new Teacher({
        name,
    }).save().then(data => res.json(data))
})

//@desc for get teacher data to admin
//@route get /admin/show/teacher
router.get('/show/teacher', requirelogin, (req, res) => {
    Teacher.find().then(data => res.json(data))
})



//@desc for post subjects for teacher
//@route put /admin/post/subject

router.put('/post/subject', (req, res) => {
    const course = {
        batch: req.body.batch,
        sem:req.body.sem,
        name:req.body.name
    }


    Teacher.findByIdAndUpdate(req.body.id, {
        $push: { course: course }
    },
        {
            new: true
        }
    ).exec((err, subjetadd) => res.json(subjetadd))
})



//@dsc adding question
//@route post / /post/question

router.post('/question',(req,res)=>{
    
        new Question ({
            question:req.body.question,

        }).save().then(data=>{

            //its for testing not recommended

            

                            /* allTeacher.map(singleTeacher=>{
                                console.log(singleTeacher) */
                            Teacher.findOneAndUpdate({'course._id':"5feb5ecddfb34b248e716bfd"}, {
                                $push: { 'course.$.question': data._id }
                            },{
                                new:true
                            }
                               ).exec((e,x)=>{
                                    console.log(x)
                                })
                        // })
                
            res.json(data)
        })
})

// /admin/update
router.put("/update",requirelogin,(req,res)=>{
        teacher.findOneAndUpdate({"course":"5feb5ecddfb34b248e716bfd"},{
            $push: { 'question.$.good':req.user._id }
        },{
            new:true
        }).exec((e,data)=>res.json(data))
})

router.get('/check', (req, res) => {
        Teacher.find().populate('course.question').then(data=>res.json(data))
})



module.exports = router










/* //@desc for post question and option for teacher schema
//@route post /admin/addquestion

router.post('/addquestion', (req, res) => {
    //it will be change
    const { question, option } = req.body

    if (!question || !option) return res.json({ error: 'plz fill all the fields' });

    Teacher.find().then(allTeacher => {
        allTeacher.map(singleTeacherData => {
            Teacher.findByIdAndUpdate(singleTeacherData._id, {
                $push: { question: question, option: option }
            },
                {
                    new: true
                }

            ).exec((err, addedQuestion) => {
                if (err) console.log('error at auto adding question in teacher:', err);
                console.log(addedQuestion);
            })
        })
    })

}) */







