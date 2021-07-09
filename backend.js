const express = require('express');
const app = express();
const { PythonShell } = require('python-shell')
//post방식으로 데이터를 받을 때 필요한 모듈입니다.
//req에 데이터를 담아줍니다.

app.get('',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get("/ajax",function(req,res){
let options = {
  mode: 'text',
  pythonOptions: ['-u'], // get print results in real-time
  args: req.param('stations') // Python Script에 넘겨줄 인자 목록
};


console.log("stations :", req.param('stations'));
PythonShell.run('./test.py', options, function(err, msg) {
	if (err) throw err;
    console.log('results: %j', msg);
    res.json(msg);
});
})
// Python Script의 프로세스 종료하기
app.listen(3001, () => {
    console.log('listen to 3001')
})
