const quotes = [
    {
        quote: "꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다.",
        author: "<월트 디즈니>"
    },
    {
        quote: "비록 해가 진다고 해도, 나에게는 전기불이 있다" ,
        author: "<로커 커트 코베인>"
    },
    {
        quote: "웃음이 없는 하루는 버린 하루다." ,
        author: "<찰리 채플린>"
    },
    {
        quote: "우리는 한 번도 존재하지 않았던 것을 꿈꿀 수 있는 사람들이 필요하다." ,
        author: "<존 F. 케네디>"
    },
    {
        quote: "무슨 일을 하기 전에는 그 일에 대해 기대를 가져야 한다." ,
        author: "<농구선수 마이클 조던>"
    },
    {
        quote: "조금도 도전하지 않으려고 하는 것이 인생에서 가장 위험한 일이다" ,
        author: "<오프라 윈프리>"
    },
    {
        quote: "행동은 모든 성공의 가장 기초적인 핵심이다." ,
        author: "<파블로 피카소>"
    },
    {
        quote: "용기란 죽을만큼 두려워도 무언가 해보는 것이다." ,
        author: "<영화배우 존 웨인>"
    },
    {
        quote: "절대로 고개를 떨구지 말라. 고개를 꼿꼿이 치켜 들고 두 눈으로 똑똑히 세상을 보라." ,
        author: "<헬렌 켈러>"
    },
    {
        quote: "무언가를 위해 죽을 각오가 없다면, 인생을 살게 해줄 무언가도 가질 수 없을 것이다." ,
        author: "<체게바라>"
    },
    {
        quote: "승리는 가장 끈기 있는 사람에게 돌아간다." ,
        author: "<보나파르트 나폴레옹>"
    },
    {
        quote: "오늘 나무 그늘에서 쉴 수 있는 이유는 예전에 나무를 심었기 때문이다." ,
        author: "<워렌 버핏>"
    },
    {
        quote: "밤 사이 어려웠던 문제가 한 잠 푹 자고 나면 아침에 해결되어 있는 일은 흔한 경험이다." ,
        author: "<작가 존 스타인벡>"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//Math.round(1.9) 반올림
//Math.ceil(1.1) 올림 
//Math.floor(1.9) 내림
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;