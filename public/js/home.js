        const menuBars = document.querySelector('#mobile-menu')
        const sideMenu = document.querySelector('#side-menu-mobile')
        const tourDropdown = document.querySelector('#tour-dropdown')
        const tourUlDropdown = document.querySelector('#tour-uldropdown')
        const resourceDropdown = document.querySelector('#resources-dropdown')
        const resourceUlDropdown = document.querySelector('#resources-uldropdown')
        const storeDropdown = document.querySelector('#store-dropdown')
        const storeUldropdown = document.querySelector('#store-uldropdown')

        const dropdownElement = document.querySelectorAll('.dropdown')
        const ulDropdown = document.querySelectorAll('.dropdown-ul')

        menuBars.addEventListener('click',toggleMenu)
        tourDropdown.addEventListener('click', toggleTour)
        resourceDropdown.addEventListener('click', toggleResource)
        storeDropdown.addEventListener('click',toggleStore)

        // dropdownElement.forEach(el => {
        //     el.addEventListener('click',toggleList)
        //     });
        // ulDropdown.addEventListener('click',toggleList)


        // function toggleMenu(){
        //     const isSideMenuOpen = !sideMenu.classList.contains('inactive')

        //     if(isSideMenuOpen){
        //         sideMenu.classList.add('inactive')
        //         sideMenu.style.setProperty("animation","right-fade 01s")
        //     }else{
        //         sideMenu.classList.remove('inactive')
        //         sideMenu.style.setProperty("animation","left-fade 0.3s")
        //     }
        // }
        function toggleMenu(){
            const isSideMenuOpen = !sideMenu.classList.contains('inactive')

            if(isSideMenuOpen){
                sideMenu.classList.add('inactive')
                sideMenu.computedStyleMap.setProperty("animation", "right-fade 01s")
            }
            else{
                sideMenu.classList.remove('inactive')
                sideMenu.computedStyleMap.setProperty("animation", "left-fade 0.3s")
            }
        }

        function toggleTour(){
            const istourDropdown = !tourUlDropdown.classList.contains('inactive')

            if(istourDropdown){
                tourUlDropdown.classList.add('inactive')
            }else{
                tourUlDropdown.classList.remove('inactive')
            }
        }

        function toggleResource(){
            const isresourceDropdown = !resourceUlDropdown.classList.contains('inactive')

            if(isresourceDropdown){
                resourceUlDropdown.classList.add('inactive')
            }else{
                resourceUlDropdown.classList.remove('inactive')
            }
        }

        function toggleStore(){
            const isstoreDropdown = !storeUldropdown.classList.contains('inactive')

            if(isstoreDropdown){
                storeUldropdown.classList.add('inactive')
            }else{
                storeUldropdown.classList.remove('inactive')
            }
        }