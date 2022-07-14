describe ('some examles', function () {
    
    it('testing of site', function () {
        
        cy.visit('https://automation.altibb.com/')
        
        //click on Discover medical dropdown
        cy.get('a[class="nav-link-altibbi ml-40 hide-mobile ml-mobile-0"]').click() 
        
        //click on medical videos
        cy.xpath('//*[@class="white-header"]//img[@alt="video"]/../../a').click()
        
        //click on the second video header
        cy.get("div.video-body>a[href*='560']:nth-child(1)").click({force: true})
       //div.video-body>a[href*='560']:nth-child(1)
        //.id-33-1.d-block[href="/فيديوهات-طبية/الامراض-المعدية/الرجفان-الاذيني-القلب-560"]

        //click on the share button
        cy.get('.question-background-v2.id-34-1 [class="share-icon-v2 js-lazy-image"]').click({force: true})

        //click on pages such as facebook, inst, twitter etc
        cy.xpath('.//section[@class="dropdown-menu share-menu-v2 show"]//*//*//span[contains(text(),"Facebook")]').click({force: true})
        cy.get('.question-background-v2.id-34-1 [class="share-icon-v2 js-lazy-image"]').click({force: true})
        cy.xpath('.//section[@class="dropdown-menu share-menu-v2 show"]//*//*//span[contains(text(),"Twitter")]').click({force: true})
        cy.get('.question-background-v2.id-34-1 [class="share-icon-v2 js-lazy-image"]').click({force: true})
        cy.xpath('.//section[@class="dropdown-menu share-menu-v2 show"]//*//*//span[contains(text(),"Linkedin")]').click({force: true})
        cy.get('.question-background-v2.id-34-1 [class="share-icon-v2 js-lazy-image"]').click({force: true})
        cy.xpath('.//section[@class="dropdown-menu share-menu-v2 show"]//*//*//span[contains(text(),"Instagram")]').click({force: true})
        cy.get('.question-background-v2.id-34-1 [class="share-icon-v2 js-lazy-image"]').click({force: true})

        //click on appointment btn and assert the Find a doctor header 
        cy.get('[class="booking-cta-btn"]').click({force: true})
        cy.get('[class="main-search-header"]').should('contain', 'ابحث عن طبيب واحجز موعد بكل سهولة ')
        
        //assert that "Free suggested questions and answers" section is displayed
        cy.get('[class="primary-article-title"]').should('be.visible')

        cy.go('back')
        //click on "view all questions" btn and assert the redirection
        cy.get('[class="show-all-questions-wrapper"]').click({force: true})
        cy.url().should('include', 'https://automation.altibb.com/')

         //assert that "Medical news and articles" with any news section is displayed
         cy.get('.img-container.position-relative [href="/مقالات-طبية/امراض-الجهاز-الهضمي/انماط-شخصية-6009"]').should('be.visible');

        //assert that "latest medical video" with any video is displayed
        cy.get('[class="video-image-container"]').should('be.visible')

    })

})