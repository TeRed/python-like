# PythonLike

PythonLike to język mocno oparty na Pythonie3, kompilowany do JavaScript.

PythonLike pozwala na tworzenie skryptów przetwarzającyh dane w Pythonie i uruchamianie ich w przeglądarce.

## Instalacja

W celu instalacji oraz uruchamiania modułu, wymagane jest posiadania środowiska dla JavaScriptu. Program testowany był przy użyciu Node.js.
Instalator mona pobrać z [oficjalnej strony](https://nodejs.org/en/).

Moduł instalujemy poprzez wywołanie
```bash
$ npm -g install python-like
```

## Krótka instrukcja obsługi

Z modułu korzystamy z konsoli przy pomocy komendy:
```bash
$ pyli in-file [-o out-file] [-b]
```

Domyślne wywołanie kompiluje podany kod do kodu JavaScriptu, po czy wykonuje go.
Możemy także podać scieżkę do pliku wyjściowego, wtedy kod nie zostanie wykonany lecz zapisany w podanym pliku.
Istnieje także opcja `-b`, dzięki której kod zapisany w pliku zostanie sformatowany.