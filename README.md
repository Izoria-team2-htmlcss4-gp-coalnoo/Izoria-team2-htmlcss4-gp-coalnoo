# Izoria 이탈리안 레스토랑 웹사이트

## 프로젝트 개요

부트스트랩의 다양한 컴포넌트와 클래스 사용 및 부트스트랩 Grid 이해. 미디어쿼리를 이용한 반응형 웹페이지 구축을 위해 제작된 이탈리안 레스토랑 웹사이트입니다.

## 사용 기술

- HTML5
- CSS3
- Bootstrap 5.3.0
- JavaScript
- Font Awesome 6.0
- Media Query

## 색상 시스템

```css
:root {
    --primary-color: #ffb87d;    /* 메인 브랜드 컬러 */
    --second-color: #182244;     /* 보조 컬러 */
}
```

- **Primary Color (#ffb87d)**: 주요 브랜드 요소, CTA 버튼, 강조 요소
- **Second Color (#182244)**

## 부트스트랩 Grid 시스템

### 기본 구조 (예)
```html
<div class="container pt-5 pb-5">
    <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
            <!-- 콘텐츠 -->
        </div>
    </div>
</div>
```

### 반응형 브레이크포인트 (예)
- **Desktop**: `col-lg-4` (3열)
- **Tablet**: `col-md-6` (2열)  
- **Mobile**: `col-sm-12` (1열)

## 주요 컴포넌트

### 메뉴 카드 (예)
```html
<div class="card menu-card">
    <img src="..." class="card-img-top" alt="메뉴 설명">
    <div class="card-body text-center">
        <h5 class="card-title">메뉴명</h5>
        <p class="card-text">메뉴 설명</p>
    </div>
</div>
```

## 반응형 디자인

### 미디어쿼리 (예)
```css
@media screen and (max-width: 48rem) {
    .hero-title {
        font-size: 2.5rem;
    }
    .hero-section {
        height: 70vh;
    }
    .menu-card {
        margin-bottom: 2rem;
    }
}
```

### 모바일 최적화
- 제목 크기: 4rem → 2.5rem
- 히어로 높이: 100vh → 70vh
- 네비게이션: 햄버거 메뉴로 변환

## CSS 중복 제거

### Before (비효율적)
```css
.custom-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}
```

### After (부트스트랩 활용)
```html
<div class="container">
    <!-- 부트스트랩 클래스로 대체 -->
</div>
```

부트스트랩에서 제공하는 클래스들을 사용해 CSS 코드의 불필요한 중복을 제거

## 커스텀 스타일

### 버튼 (예)
```css
.btn-izoria {
    background-color: var(--primary-color);
    color: var(--second-color);
    padding: 1rem 2rem;
    border-radius: 50px;
    transition: all 0.3s ease;
}

.btn-izoria:hover {
    background-color: var(--second-color);
    color: var(--primary-color);
    transform: translateY(-2px);
}
```

### 카드 호버 효과 (예)
```css
.menu-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}
```

## 구현 완료 기능

- 반응형 그리드 시스템
- 부트스트랩 컴포넌트 활용
- 호버 애니메이션 효과
- 미디어쿼리 적용
- CSS 변수 시스템


## 프로젝트 구조

```
IZORIA-TEAM2/
├── assets/
│   ├── html-common/           # 공통 HTML 컴포넌트
│   └── images/                # 이미지 리소스
├── contactus-page/
│   ├── index.html            # 연락처 페이지
│   └── style.css             # 연락처 페이지 스타일
├── event-page/
│   ├── index.html            # 이벤트 페이지
│   └── style.css             # 이벤트 페이지 스타일
├── faq-page/
│   ├── index.html            # FAQ 페이지
│   └── style.css             # FAQ 페이지 스타일
├── js/
│   └── common-load.js        # 공통 JavaScript
├── location-page/
│   ├── index.html            # 위치 페이지
│   └── style.css             # 위치 페이지 스타일
├── menu-page/
│   ├── index.html            # 메뉴 페이지
│   └── style.css             # 메뉴 페이지 스타일
├── recruit-page/
│   ├── index.html            # 채용 페이지
│   └── style.css             # 채용 페이지 스타일
├── common.css                # 공통 스타일시트
├── index.html                # 메인 홈페이지
├── style.css                 # 메인 페이지 스타일
└── README.md                 # 프로젝트 문서
```

### 페이지별 구조
- **메인 페이지**: `index.html` + `style.css`
- **연락처**: `contactus-page/`
- **이벤트**: `event-page/`
- **FAQ**: `faq-page/`
- **위치**: `location-page/`
- **메뉴**: `menu-page/`
- **채용**: `recruit-page/`

각 페이지는 독립적인 폴더 구조로 관리되며, `common.css`를 통해 공통 스타일을 공유합니다.

## 시작하기

```bash
git clone https://github.com/Izoria-team2-htmlcss4-gp-coalnoo/Izoria-team2-htmlcss4-gp-coalnoo.git
```

브라우저에서 `index.html` 파일을 열어 실행하세요.


# HTML/CSS 코딩 규칙 가이드

팀 프로젝트를 위한 HTML과 CSS 코딩 컨벤션입니다.

## 📋 목차

- [HTML 규칙](#html-규칙)
- [CSS 규칙](#css-규칙)
- [주의사항](#주의사항)

## 🏗 HTML 규칙

### 문서 구조
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>페이지 제목</title>
</head>
<body>
    <!-- 콘텐츠 내용 -->
</body>
</html>
```

### 네이밍 및 포맷팅
- **소문자 사용**: 모든 요소와 속성은 소문자로 작성
- **쌍따옴표 사용**: 속성값에는 쌍따옴표(`"`) 사용
- **들여쓰기**: 2칸 또는 4칸 공백 사용 (일관성 유지)
- **태그 닫기**: 자기 닫기 태그도 닫기 표시: `<img src="..." alt="..." />`
- **시맨틱 태그 사용**: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`

### 클래스 및 ID 네이밍
```html
<!-- 케밥 케이스 사용 -->
<div class="header-navigation">
<div id="main-content">

<!-- 명확한 이름 사용 -->
<button class="btn-primary-large">
<section class="product-card-container">
```

## 🎨 CSS 규칙

### 포맷팅 및 구성
```css
/* 일관된 들여쓰기 사용 */
.selector {
    property: value;
    property: value;
}

/* 관련 속성끼리 그룹화 */
.element {
    /* 위치 관련 */
    position: relative;
    top: 0;
    left: 0;
    
    /* 박스 모델 */
    width: 100px;
    height: 50px;
    margin: 10px;
    padding: 5px;
    
    /* 타이포그래피 */
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: #333;
    
    /* 시각적 효과 */
    background-color: #fff;
    border: 1px solid #ccc;
}
```

### 네이밍 컨벤션
```css
/* BEM 방법론 사용 */
.block {}
.block__element {}
.block--modifier {}

/* 예시 */
.card {}
.card__header {}
.card__body {}
.card--featured {}

/* 또는 의미 있는 클래스명 사용 */
.navigation-menu {}
.product-listing {}
.user-profile {}
```

### 모범 사례

#### CSS 구성 순서
```css
/* 1. 리셋/노말라이즈 스타일 */
/* 2. 기본 스타일 (html, body 등) */
/* 3. 레이아웃 컴포넌트 */
/* 4. UI 컴포넌트 */
/* 5. 유틸리티 클래스 */
```

#### 색상 및 단위
```css
/* CSS 커스텀 속성 사용 */
:root {
    --primary-color: #007bff;
    --text-color: #333;
    --spacing-unit: 1rem;
}

/* 상대 단위 선호 */
.container {
    max-width: 1200px;
    padding: 2rem;
    font-size: 1.125rem; /* 18px */
}
```


## 피해야 할 것들

### HTML/CSS
- 인라인 스타일 사용

## 📝 주석 작성법

### HTML 주석
```html
<!-- 헤더 섹션 시작 -->
<header class="main-header">
    <!-- 내비게이션 -->
    <nav class="main-nav">
        <!-- 메뉴 항목들 -->
    </nav>
</header>
<!-- 헤더 섹션 끝 -->
```

### CSS 주석
```css
/* ===== 헤더 컴포넌트 ===== */
.header {
    /* 메인 헤더 스타일 */
}

/* 헤더 내 내비게이션 */
.header__nav {
    /* 내비게이션 스타일 */
}
```

## 브라우저 호환성

- Chrome 90+
- Firefox 88+  
- Safari 14+
- Edge 90+

