firebase projects:list 를 쓰면 프로젝트들의 ID가 출력

firebase use 프로젝트ID 이렇게 명령어 입력

발행하려면 
firebase deploy --only hosting

도메인을 구매했으면 도메인 연결도 가능

hosting 메뉴에서 여러가지 호스팅 관련 작업 가능

firebase deploy --only firestore 하면 vs에서 rule 작업이 가능하다.

테스트용으로 발행하고 싶으면 

firebase hosting:channel: deploy version1 --expires 7d

잘 작동을 확인하면 

firebase hosting: clone 프로젝트ID: 버전명 프로젝트 ID:live