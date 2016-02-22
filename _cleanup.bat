if exist *.html del *.html
if exist css rmdir css /s /q
if exist static rmdir static /s /q
if exist blog rmdir blog /s /q


REM Delete all files/folders in current dir except _cleanup.bat and _src.
REM Does this by a) setting the attributes of the files we want to keep to 
REM readonly and hidden, b) deleting the rest, c) reseting the attributes. 
REM Inspired by http://stackoverflow.com/questions/558648/how-can-i-delete-all-files-subdirs-except-for-some-files-in-dos

attrib +r +s _cleanup.bat
attrib +r +s .git/**.*
attrib +r +s _src/**.*

del *.* /S /Q

attrib -r -s _cleanup.bat
attrib -r -s .git/**.*
attrib -r -s _src/**.*


REM Delete all subdirectories except the ones we'd marked as hidden/readonly.
attrib +r +s _src
attrib +r +s .git

FOR /D  %%G in (*) DO RD /s /q %%G

attrib -r -s _src
attrib -r -s .git
