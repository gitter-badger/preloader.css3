# preloader.css3

[![Join the chat at https://gitter.im/yarkovaleksei/preloader.css3](https://badges.gitter.im/yarkovaleksei/preloader.css3.svg)](https://gitter.im/yarkovaleksei/preloader.css3?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

**Установка:**
```bash
$ bower install preloader.css3 --save
#или так
$ bower install https://github.com/yarkovaleksei/preloader.css3.git --save
```

**Подключение (перед закрывающим тегом head):**
```html
<link rel="stylesheet" href="bower_components/preloader.css3/dist/preloader.css">
```

**И после открывающего тега body вставляем html блок:**
```html
<div class="css3 container">
    <div class="css3 wrapper">
        <div class="css3 part left"></div>
        <h1 class="css3">Loading application... Please wait</h1>
        <div class="css3 round1 round2"></div>
        <div class="css3 part right"></div>
    </div>
</div>
```

**Подключение (перед закрывающим тегом body):**
```html
<script src="bower_components/preloader.css3/dist/preloader.js"></script>
```

**Результат:**
[Демо](https://yarkovaleksei.github.io/preloader.css3)
