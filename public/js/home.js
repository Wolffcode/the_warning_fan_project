const menuBars = document.querySelector('#mobile-menu')
        const sideMenu = document.querySelector('#side-menu-mobile')
        const dropdownElement = document.getElementsByClassName('dropdown')
        const ulDropdown = document.getElementsByClassName('.dropdown-ul')

        menuBars.addEventListener('click',toggleMenu)
        dropdownElement.addEventListener('click',toggleList)
        ulDropdown.addEventListener('click',toggleList)


        function toggleMenu(){
            const isSideMenuOpen = !sideMenu.classList.contains('inactive')

            if(isSideMenuOpen){
                sideMenu.classList.add('inactive')
                sideMenu.style.setProperty("animation","right-fade 01s")
            }else{
                sideMenu.classList.remove('inactive')
                sideMenu.style.setProperty("animation","left-fade 0.3s")
            }
        }

        function toggleList(){
            console.log("aqui estoy!")

        }