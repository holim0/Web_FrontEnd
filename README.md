# Web_FrontEnd 🔥

</br>

⭐️ **사용언어** : NextJs, TypeScript

<img src = "https://user-images.githubusercontent.com/48006103/102682285-bc877700-420b-11eb-9fe6-4edce1c0f2ef.png" width="400"/>

</br>

💻 **개발 환경** : Visual Studio Code, Mac OS, Window OS

</br>

#### Directory Structure

---

1. @**types** : 타입을 정의하는 폴더

    - 전역적으로 타입을 사용하기 위해 정의하는 폴더

2. **components**

    - 함수형 컴포넌트파일들
    - layouts (헤더, 푸터 등)
    - common (재사용 컴포넌트)
    - 그외 페이지에 따른 프레젠터 역할을 하는 컴포넌트 생성

3. **pages** : 라우터에따른 페이지 (로직은 이곳에서)
4. **redux**: 리덕스(ducks패턴)
5. **sagas** : 백엔드로 api 요청이 실질적으로 이루어지는 곳.
   리덕스 사가
6. **store** : 스토어 설정 파일
7. **styles** : 공통으로 쓰이는 컴포넌트 스타일/theme 스타일/글로벌&리셋스타일

</br>

#### Commit Convention

---

✅ 커밋을 할 때 커밋 컨벤션을 따르는 것을 원칙으로 합니다.

✅ 타입 별로 세분화 하여 커밋 메세지를 작성합니다.

</br>

커밋 메시지는 타입, 제목, 본문(선택), 꼬리말(선택) 세 부분으로 작성합니다.

-   [타입(Type)] 제목(Title)
-   본문(Body)
-   꼬리말(Footer)

</br>

**제목**

-   커밋 메세지 제목의 맨 앞에 타입(Type)을 붙여준다. 각 타입의 종류는 아래와 같다.
    -   기능(Feat): 새로운 기능을 추가
    -   버그(Fix): 버그 수정 및 코드 수정
    -   리팩토링(Refactor): 코드 리팩토링
    -   형식(Style): 코드 형식, 정렬, 주석 등의 변경(동작에 영향을 주는 코드 변경 없음)
    -   테스트(Test): 테스트 추가, 테스트 리팩토링(제품 코드 수정 없음, 테스트 코드에 관련된 모든 변경에 해당)
    -   문서(Docs): 문서 수정(제품 코드 수정 없음)
    -   기타(Chore): 빌드 업무 수정, 패키지 매니저 설정 등 위에 해당되지 않는 모든 변경(제품 코드 수정 없음)
    -   코드 제거(Remove) : 코드 제거
-   총 글자 수는 50자 이내며 마지막에 마침표(.)를 붙이지 않는다.
-   커밋 유형들이 복합적인 경우 최대한 분리하여 커밋한다.

</br> </br>

### 웹 페이지 구성 (시안) - 보완 예정

---

#### 메인 페이지

<img src="https://user-images.githubusercontent.com/48006103/102688975-0f7a2200-423e-11eb-8695-98148628ba58.jpeg" width="400"/>

#### 건물 리스트 페이지

<img src="https://user-images.githubusercontent.com/48006103/102689005-4a7c5580-423e-11eb-9676-322249bd63ba.jpeg" width="400"/>

#### 건물 정보 상세 페이지

<img src="https://user-images.githubusercontent.com/48006103/102689033-77c90380-423e-11eb-8da8-18e96e15f881.jpeg" width="400"/>

#### 건물 별 원룸 상세 페이지

<img src="https://user-images.githubusercontent.com/48006103/102689036-88797980-423e-11eb-9367-f73670c953a2.jpeg" width="400"/>

#### 리뷰(글쓰기) 작성 페이지

<img src="https://user-images.githubusercontent.com/48006103/102689041-8d3e2d80-423e-11eb-84f8-4eca2914a7e0.jpeg" width="400"/>

#### 리뷰(글쓰기) 작성 페이지2

<img src="https://user-images.githubusercontent.com/48006103/102689043-90391e00-423e-11eb-926d-3080b2f1d5ae.jpeg" width="400"/>

#### Etc

---

-   로그인 및 회원가입은 => 모달창으로 구현
-   게시글은 파지네이션으로

로그인/회원가입 => 두명이하고?

//
헤더 => 금방이고 (리뷰 글쓰기/어바웃어스도 추가)
푸터 => (카피라이트, 소재지, 우리이름들, 문의 이메일, 링크?)
↓
메인 페이지 -> 일단 지도 빼고 / 슬라이더는 가능
↓
건물 페이지 => 데이터는만들고.
↓
리뷰 글보는 페이지
↓
글쓰기 페이지~~
//

####

</br></br>
