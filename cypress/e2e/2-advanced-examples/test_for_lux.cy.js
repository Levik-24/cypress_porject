import { should } from "chai"

describe ('My first test', function () {
    
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
        //cy.get('[class="main-search-header"]').should('have.text', '\nبحث عن طبيب واحجز موعد بكل سهولة')
        
        //assert that "Free suggested questions and answers" section is displayed
        cy.get('[class="primary-article-title"]').should('be.visible')

        cy.go('back')
        //click on "view all questions" btn and assert the redirection
        cy.get('[class="show-all-questions-wrapper"]').click({force: true})
        cy.url().should('include', 'https://automation.altibb.com/')
        
        //assert that "Medical news and articles" with any news section is displayed
        cy.get('.img-container.position-relative [href="/مقالات-طبية/امراض-باطنية/dasdadsadasdasddsadasdsadsadsa-5996"]').should('be.visible');


        //assert that "latest medical video" with any video is displayed
        cy.get('[class="primary"]').should('be.visible')
        cy.get('[class="video-image-container"]').should('be.visible')



        //cy.get('[class="main-search-header"]').should('be.visible');

        //cy.url().should('eq', 'https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fautomation.altibb.com%252F%25D9%2581%25D9%258A%25D8%25AF%25D9%258A%25D9%2588%25D9%2587%25D8%25A7%25D8%25AA-%25D8%25B7%25D8%25A8%25D9%258A%25D8%25A9%252F%25D8%25A7%25D9%2584%25D8%25A7%25D9%2585%25D8%25B1%25D8%25A7%25D8%25B6-%25D8%25A7%25D9%2584%25D9%2585%25D8%25B9%25D8%25AF%25D9%258A%25D8%25A9%252F%25D8%25A7%25D9%2584%25D8%25B1%25D8%25AC%25D9%2581%25D8%25A7%25D9%2586-%25D8%25A7%25D9%2584%25D8%25A7%25D8%25B0%25D9%258A%25D9%2586%25D9%258A-%25D8%25A7%25D9%2584%25D9%2582%25D9%2584%25D8%25A8-560&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ru_RU')

        //cy.contains('trigger').click()

        //cy.url().should('include', '/commands/actions')

        //cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
    })
})