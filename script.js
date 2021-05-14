let input = document.querySelector('input')

let textarea = document.querySelector('textarea')

// This event listener has been implemented to identify a
// Change in the input section of the html code
// It will be triggered when a file is chosen.
input.addEventListener('change', () => {
        var filename = 'temp.htm';
        var fso, a, ForReading, sContent;
        ForReading = 1;
        fso = new ActiveXObject('Scripting.FileSystemObject');
        file = fso.OpenTextFile(filename, ForReading, false);
        sContent = file.readline();
        file.Close();
});
