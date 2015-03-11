<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Sweet Corner</title>
		<link rel="stylesheet" href="Assets/stylesheets/main.css">
        <script type="text/javascript" src="Assets/js/jquery-2.1.3.min.js"></script>
        <script src="Assets/js/main.js"></script>
    </head>
    
   <body>
       
       <?php include_once("includes/header.php"); ?>
       
       <section id="mainArea">
           <?php 
                $allowed = ["about-us.php", "contact.php", "home.php", "services.php"];
                $page = "home.php";
                for($i=0; $i<count($allowed); $i++){
                    if($allowed[$i] === $_GET['page']){
                        $page = $_GET['page'];
                    }
                }
                include("pages/$page"); 
           ?>
       </section>
       
       <?php include_once("includes/footer.php"); ?>
       
   </body>
</html>