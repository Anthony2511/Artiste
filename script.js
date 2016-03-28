
    function ouvrirFermer(div)
    {
        var divContenu = div.getElementsByTagName('div')[1];

        if(divContenu.style.display == 'block')
            console.log(divContenu.style.display = 'none');
        else
            divContenu.style.display = 'block';
    }
