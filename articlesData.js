// parse javascript objects to html

const articleData = [
    {
        id: 1,
        title: "Wonderful Copenhagen 2011",
        date: "22/1-2011",
        content: "  NORDIC BARISTA CUP will be held from 25. – 27. August 2011 in Copenhagen. The theme for NBC 2011 is: SENSORY. The aim is to understand the chemistry behind our sensory perceptions and by stimulating the senses we will improve our tasting skills.",
        image: "/blogs/01._blog01.jpg"
    },
    {
        id: 2,
        title: "Into The Icelandic Wild",
        date: "09/07-2009",
        content: " second night arThis place is SO lovely, so deep in the woods, but we are hardly roughing it: the cabins we’re staying in today for our e absolutely beautiful, with hot tubs and a bar, of course! ",
        image: "/blogs/02._blog02.jpg"
    },
    {
        id: 3,
        title: "Build It, Beer It, Brew It",
        date: "07/07-2009",
        content: " Now that’s a competition! The back to the basics theme really got things started this morning with a very cool competition unlike any I’ve ever seen. And in an interesting twist, the attendees joined the teams in the challenge: build a primitive roaster and grinder, and roast and grind coffee. ",
        image: "/blogs/03._blog03.jpg"
    },
    {
        id: 4,
        title: "Nordic Barista Cup Of Excellence",
        date: "22/1-2011",
        content: "competition unlike any I’ve ever seen. And in an interesting twist, the attendees joined the teams in the challenge: build a primitive roaster and grinder, and roast and grind coffee. (ACE) and the Cup of Excellence (CoE) here in Iceland. ",
        image: "/blogs/04._blog04.jpg"
    },
    {
        id: 5,
        title: "Day 1 – From Reykjavík To The Wild",
        date: " 07/07-2009",
        content: " So a few things have happened since last we posted. Following the longstanding Icelandic tradition of a spontaneous afternoon dance party. ",
        image: "/blogs/05._blog05.jpg"
    },
    {
        id: 6,
        title: "Fun In The Afternoon!",
        date: "06/07-2009",
        content: " It’s the defining axiom of the Nordic Barista Cup. The only rule is there are no rules. ",
        image: "/blogs/06._blog06.jpg"
    },
    {
        id: 7,
        title: "Now That’s A Twist",
        date: "22/1-2011",
        content: " This is a test for a paragraph.Ut enim ad minim veniam, quis nostrud exercitation.Duis aute irure dolor in reprehenderit in voluptate. ",
        image: "/blogs/07._blog07.jpg"
    },
    {
        id: 8,
        title: "NBC ’09 Day 1 – Focus Country Costa Rica",
        date: "22/1-2012",
        content: " The first real team challenge of the 2009 NBC just concluded. Each team was required to give a 10-minute presentation on a coffee growing region of this year’s focus country, Costa Rica. ",
        image: "/blogs/08._blog08.jpg"
    },
    {
        id: 9,
        title: "Good Morning, NBC!",
        date: "22/1-2013",
        content: " After some much needed sleep last night, everyone is raring to go this morning, as day number one of the 2009 Nordic Barista Cup (NBC) begins! ",
        image: "/blogs/09._blog09.jpg"
    },
    {
        id: 10,
        title: "Lost In Iceland With A Thermos",
        date: "22/1-2011",
        content: " The committee for the Nordic Barista Cup 2009 has been meeting and planning the competition for a while now.",
        image: "/blogs/10._blog10.jpg"
    },
    {
        id: 11,
        title: "World Barista Champ Invited To Iceland",
        date: "22/1-2012",
        content: "We look forward to see you in Iceland! From left: Hrönn, Gúðrún, Jóannes, Guðbjörg, Jens, Ragga, Jónina, Sonja, Addy, Björg ",
        image: "/blogs/11._blog11.jpg"
    },
    {
        id: 12,
        title: "U.S. Barista Champion To Nordic Barista Cup",
        date: "22/1-2013",
        content: " The new US barista champion Michael Phillips from Intellegentsia Coffee Roasters, has won himself a ticket to the Nordic Barista Cup in Reykjavík. ",
        image: "/blogs/12._blog12.jpg"
    },
    {
        id: 13,
        title: "Icelandic Links",
        date: "22/1-2011",
        content: " Þingvellir: The Icelandic parliament (Alþingið) was established at Þingvellir in 930. Today Þingvellir is a national park and a UNESCO World Heritage Site. ",
        image: "/blogs/13._blog13.jpg"
    },
    {
        id: 14,
        title: "Nordic Fashionistas",
        date: "22/1-2012",
        content: "NORDIC BARISTA CUP 2009 SWEATHER During Nordic Barista Cup 2009 we are working together with Farmers Market, an Icelandic design company founded in 2005.",
        image: "/blogs/14._blog14.jpg"
    },
    {
        id: 15,
        title: "Nordic Barista Cup Hotel / Hostel",
        date: "22/1-2013",
        content: " We have made deals with one hostel and one hotel for the Nordic Barista Cup. Please mention “Nordic Barista Cup” when you book your room/bed. This way you will get a discount on the price. ",
        image: "/blogs/15._blog15.jpg"
    }
];


document.getElementById("article-wrapper").innerHTML = `
${articleData.map(function (blog) {
    return `
    <div class="article">
        <img src="${blog.image}">
        <div class="comment more">
            <h4>${blog.title}</h4>
            <h6 class="date">${blog.date}</h6> 
            <p>${blog.content}</p>
            <button type="button" class="read_more">Read More</button> 
        </div>
    </div>
    `
}).join('')}`



