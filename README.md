# Momentum

프로젝트를 진행하며 학습한 개념을 정리합니다.

---

## 📚 알게 된 개념

### 💡 화살표함수

- ES6에서 도입된 함수표현식으로 기존의 함수 선언방식보다 간결하게 함수를 작성할 수 있는 문법이다.

1. 기본 문법

`const 함수이름 = (매개변수) => {함수의 내용;}`

2. 화살표 함수에서 중괄호 {}

`const add = (a,b) => { a + b;}`
-> 중괄호를 사용하여 함수 본문으로 간주되며, return값을 써야 반환된다.

`const add = (a,b) => a + b;`
-> 중괄호 없이 작성된 표현식은 자동으로 리턴값으로 간주되어 a+b값이 반환된다. 소괄호도 마찬가지

---

### 💡 ...전개구문

1. Spread Operator로 사용될 때

- 배열이나 객체를 **펼칠 때**

```
// 배열 펼치기
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// 객체 펼치기
const obj1 = { name: "John" };
const obj2 = { ...obj1, age: 30 }; // { name: "John", age: 30 }
```

2. Rest Parameter로 사용될 떄

- 여러 값을 하나의 배열로 **모을 때**

```
// 함수 매개변수로 사용
function introduce(name, ...hobbies) {
    console.log(`제 이름은 ${name}입니다.`);
    console.log(`취미는 ${hobbies.join(', ')}입니다.`);
}

introduce('John', '축구', '게임');

// 배열 구조분해할당에서 사용
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(rest); // [3, 4, 5]
```

---

### 💡 margin과 padding

- **margin**은 요소 **바깥쪽 여백**을 뜻한다.
- **padding**은 요소 **안쪽 여백**을 뜻한다.

---

### 💡 가운데 정렬 margin:auto

margin: auto는 부모 요소보다 작을 때 남는 공간을 자동으로 균등하게 분배해서 가운데 정렬되도록 한다.

#### ✅ 동작조건

1. 정렬하려는 방향의 크기(width 또는 height)가 명시되어 있어야한다.

   - 가로 가운데 정렬 -> width
   - 세로 가운데 정렬 -> height (실제로 flex, grid 사용)

2. 부모 요소가 display: block 이어야한다.

   - 또는 flex/grid도 가능하다.

---

### 💡 position 속성정리

1. static

- 기본 값. 문서의 흐름을 따라 배치되며 top, left 등의 위치속성을 적용할 수 없다.

2. relative(자기 자신을 기준)

- 자신의 원래 위치를 기준으로 이동. 자리(space)는 그대로 유지됨.

3. absolute (부모를 기준)

- 부모 요소중 position: relative|absolute|fixed 요소를 기준으로 배치된다.
- 만약 부모요소가 static이라면 body를 기준으로 위치가 결정된다.
- **원래의 자리에서 완전히 분리됨**
- absolute의 너비는 0. 안보이면 지정해주기

4. fixed

- 브라우저 창(viewport)을 기준으로 위치가 고정된다.
- 스크롤해도 위치가 고정된다.

5. sticky

- 스크롤하다가 특청 위치에 도달되면 고정된다.
- 원래 relative처럼 작동하다가 특정위치에 도달하면 fixed처럼 작동한다.

---

### 💡 CSS에서 상대적, 절대적 개념

| 개념   | 뜻                         | CSS 예시                                    |
| ------ | -------------------------- | ------------------------------------------- |
| 상대적 | **기준**이바뀌면 값도 바뀜 | relative : 원래 위치에서 이동               |
| 절대적 | **기준**이 고정됨          | absolute : 부모 기준으로 정확한 위치에 고정 |

---

### 💡 display:flex|hidden 우선순위

- 문제사항
  `.hidden{display: none}` 으로 정의한 class 가 상위 요소의 style display:flex 에 우선순위가 밀려 동작하지않음.

#### ✅ 해결방법

1. **!important** 추가하여 우선순위 강제로 높인다.
2. 상위 요소에 적용된 display 속성을 설정된 조건에따라 동적으로 변경하는 방식을 쓴다.
3. `visibility: hidden;` 을 사용한다. 단, 요소가 공간을 차지해 layout에 영향을 줄 수 있으므로 상황에 맞게 사용한다.

---

---

💡 **이 README는 지속적으로 업데이트됩니다.**
