    $(function() {
        // оголошення десяти слів
        let cards = ["Car", "Mouse", "Cube", "Magazine", "Peach", "Anthem", "Mercury", "Watch", "Pencil", "Painter"];

        // дія для кнопки Почати
        $("#start").click(function() {
            check();
            Cards();
            $("#start").prop('disabled', true);
        })

        // дія для кнопки Підтвердити
        $("#accept").click(function() {
            check();
            answers();
            Cards();
            statistic();
        })

        // введення за допомогою enter
        $("#answer").on('keydown', function(event) {
            if(event.which == 13) {
                check();
                if ($("#answer").val().trim() !== "") {
                    answers();
                    Cards();
                    statistic();
                }
            }
        })

        // перевірка вводу
        function check() {
            $("#accept").prop('disabled', true);

            $("#answer").on("input", function() {
                const trimmedValue = $(this).val().trim();
                $(this).val(trimmedValue);
        
                if (trimmedValue !== "") {
                    $("#accept").prop('disabled', false);
                } else {
                    $("#accept").prop('disabled', true);
                }
            });
        }        

        // виподкова карточка
        function Cards() {
            if (cards.length == 0) {
                return;
            }

            let randomCard = Math.floor(Math.random() * cards.length);
            let selectedCard = cards[randomCard];
        
            cards.splice(randomCard, 1);

            $("#card").html(selectedCard);
        }

        let right = 0;
        let wrong = 0;

       function answers() {

        // написання перекладу слів
        if($("#card").text() == "Magazine") {
            if($("#answer").val() == "Журнал" || $("#answer").val() == "журнал") {
                right += 1;
                $("#right").text("Правильно: " + right);
            }
            else {
                wrong += 1;
                $("#wrong").text("Неправильно: " + wrong);
            }
        }

        if($("#card").text() == "Car") {
            if($("#answer").val() == "Машина" || $("#answer").val() == "машина") {
                right += 1;
                $("#right").text("Правильно: " + right);
            }
            else {
                wrong += 1;
                $("#wrong").text("Неправильно: " + wrong);
            }
        }

        if($("#card").text() == "Mouse") {
            if($("#answer").val() == "Миша" || $("#answer").val() == "миша") {
                right += 1;
                $("#right").text("Правильно: " + right);
            }
            else {
                wrong += 1;
                $("#wrong").text("Неправильно: " + wrong);
            }
        }

        if($("#card").text() == "Cube") {
            if($("#answer").val() == "Куб" || $("#answer").val() == "куб") {
                right += 1;
                $("#right").text("Правильно: " + right);
            }
            else {
                wrong += 1;
                $("#wrong").text("Неправильно: " + wrong);
            }
        }

        if($("#card").text() == "Peach") {
            if($("#answer").val() == "Персик" || $("#answer").val() == "персик") {
                right += 1;
                $("#right").text("Правильно: " + right);
            }
            else {
                wrong += 1;
                $("#wrong").text("Неправильно: " + wrong);
            }
        }

        if($("#card").text() == "Anthem") {
            if($("#answer").val() == "Гімн" || $("#answer").val() == "гімн") {
                right += 1;
                $("#right").text("Правильно: " + right);
            }
            else {
                wrong += 1;
                $("#wrong").text("Неправильно: " + wrong);
            }
        }

        if($("#card").text() == "Mercury") {
            if($("#answer").val() == "Ртуть" || $("#answer").val() == "ртуть") {
                right += 1;
                $("#right").text("Правильно: " + right);
            }
            else {
                wrong += 1;
                $("#wrong").text("Неправильно: " + wrong);
            }
        }

        if($("#card").text() == "Watch") {
            if($("#answer").val() == "Дивитись" || $("#answer").val() == "дивитись") {
                right += 1;
                $("#right").text("Правильно: " + right);
            }
            else {
                wrong += 1;
                $("#wrong").text("Неправильно: " + wrong);
            }
        }

        if($("#card").text() == "Pencil") {
            if($("#answer").val() == "Олівець" || $("#answer").val() == "олівець") {
                right += 1;
                $("#right").text("Правильно: " + right);
            }
            else {
                wrong += 1;
                $("#wrong").text("Неправильно: " + wrong);
            }
        }

        if($("#card").text() == "Painter") {
            if($("#answer").val() == "Художник" || $("#answer").val() == "художник") {
                right += 1;
                $("#right").text("Правильно: " + right);
            }
            else {
                wrong += 1;
                $("#wrong").text("Неправильно: " + wrong);
            }
        }

        // очищення після написання слова
        $("#answer").val('');
       }

        // щоб було тільки 10 відповідей
       function statistic() {
        if(wrong + right === 10 || wrong === 10 || right === 10) {
            $("#accept").prop('disabled', true);
            
            if(right <= 2) {
                alert("На жаль, ваш рівень англійської поганий");
                location.reload();
            }
            else if(right > 2 && right < 5) {
                alert("Ви початківець, продовжуйте в тому ж дусі");
                location.reload();
            }
            else if(right >= 5 && right < 8) {
                alert("Ваш рівень англійської достатній!");
                location.reload();
            }
            else if(right >= 8) {
                alert("Вау, ви гуру англійської мови");
                location.reload();
            }
        }
       }

       // почати заново
       $("#try-again").click(function() {
        location.reload();
       })
    })