$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var devouredState = {
            devoured: devoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function() {
                console.log("Changed devoured to", devoured);
                location.reload()
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: 0
        };
        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Created new burger");
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("Deleted burger", id);
                location.reload();
            }
        );
    });
});