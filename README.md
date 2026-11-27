# Your Turn 게임 홈

`playyourturn.app`에 올리는 한 장짜리 게임 홈. 방문자가 여기서 게임을 골라 들어간다.

- 한국어: `/` (index.html)
- 영어: `/en` (en/index.html)
- 디자인: 시안 G1 (연보라 상단 + 흰 카드 줄). 색과 간격은 site.css 맨 위에 모여 있다.
- 빌드 과정 없음. 파일을 그대로 올린다.

## 게임을 하나 더할 때

1. index.html과 en/index.html의 `<section class="games">` 안에 `<a class="game">` 줄을 하나 복사해 넣는다.
2. site.css에 새 파스텔 아이콘 색을 하나 더한다 (`.icon-이름`).
3. 준비 중 칸은 맨 아래에 그대로 둔다.

## 방문 분석

analytics.js의 `MEASUREMENT_ID`가 GA4 측정 ID다 (속성 이름: Your Turn Home). 비우면 아무것도 모으지 않는다.

## 의도 문서

`jiahnyi001/yourturn` 저장소의 `docs/intent/game-home.md`

## 옛 카드 게임 주소 넘기기

`playyourturn.app`은 원래 카드 게임 주소였다. 옛 링크가 깨지지 않도록 vercel.json의 `redirects`가 카드 게임 경로를 `cards.playyourturn.app`으로 308 리다이렉트한다. 긴 공유 링크(`#z-...` 꼴)는 index.html 맨 위의 짧은 스크립트가 넘긴다.
