const functions = require("firebase-functions");
// 앱에서 서비스계정 에서 node.js 버전 복사붙여넣기
// 라이브러리 import
// 왜냐하면 functions 랑 firestore은 다른 컴퓨터임
var admin = require("firebase-admin");

// 바로 아래서 비공개키 다운 후 function에 넣어줌
// 그리고 경로 입력
// 그 후 functions 폴더 이동 후 npm install firebase-admin
var serviceAccount = require("./repeat-carrot.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
// functions는 글올리기, 가입, 로그인 업로드등 일어나면 특정 코드를 실행 가능
exports.hello = functions.region('asia-northeast3').https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("안녕하세요");
});
// 채팅방이 생성되면 실행되는 코드
exports.createAlert = functions.region('asia-northeast3')
.firestore.document('chatroom/{docid}').onCreate((snapshot,context)=>{
    // snapshot.data() 새로 생긴거 정보가 다있음
    // context <= 경로가 들어있음
    var product = snapshot.data().product;
    var who = snapshot.data().who;

    // db는 그냥 못가져옴 
    // 그래서 맨위의 코드들을 넣어야함
    const db = admin.firestore();
    
    db.collection('user').doc(who[0]).update({alert: '채팅시작'})
    db.collection('user').doc(who[1]).update({alert: '채팅시작'})

    // functions 은 느리기 때문에 
    // firebase emulator suite 설치하든 해야함
})