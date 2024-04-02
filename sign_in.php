<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="header.css">
    <link rel="stylesheet" href="sign_in.css">
    <title>Test file</title>
</head>
    <body>
        <?php include "header.html";?>

        <div class="container">
            <form class="formSign" action="POST">
                <span>Sign in</span>

                <input type="email" name="userEmail" id="userEmail" placeholder="example@email.com">
                <input type="password" name="userPassword" id="userPassword" placeholder="********">
                <input type="submit" name="submitUser" id="submitUser">
            </form>

            <?php include "sign_heandler.php";  ?>
        </div>
    </body>
</html>