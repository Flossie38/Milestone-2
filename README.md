Tripping out
This site encourages users to plan their Lake district holiday.  The idea is shoose from hotels, pubs, restaurants, campaing site and trekking destinations to decide how and where to spend your lake district vacation.
The future plan would be to embed this Lake District holiday site in a wider holiday site as a choice of destination among others.



UX

The plan for this site is stored here: https://github.com/Flossie38/Milestone-2/blob/master/wireframe/Plan.pdf
The website is intended for users who want to learn about the places they can visit in te lake district.

As a user who wants to go campaing I would click on the tent icon and see a selection of campsites indicated by markers.  I can click on those markers and book directly with the sites.
As a user who wants to book a hotel, I would click on the hotel bed icon and see a selection of hotels indicated by markers.  I can click on those markers and book directly with the hotel.
As a user who is interested in trekking I can click on the trekking button and view various mountain walk suggestions.  The links on the markers take me to vaious walking route sites with maps and recommendations for access.


Features
The main feature of the site is the google map.  This is implemented by the Google API specified on the Adenture.html page.

The other feature is the carousel of images used as a visual teaser to entice the user to see more - by clicking on the 'Take me there' button.

The google markers are a direct link to the sponsor's own sites where the user can then continue to book their holiday plans.

To prevent the map becoming too cluttered and 'clear markers' javascript operates at the start of each button click to reset the map for the next set of markers.

Additional features and should this site be developed I would like to include an option to enter your email address to recieve updates on the sponsir's offers.

I would also like to expand the site to include voucher codes offering 10% off booking before a certain date (each code different to the preference type)

I would also like to have a separate window to the right which hosts the sponsor's site in an iframe but thios was a step too far for my current knowledge.

Technologies Used
I used HTML, CSS and Javascript.  The HTML provides the structure of the site and also the CDN links to pick up the bootstrap basic styling.
The CSS provides the styling overrides used for things like the footer and the buttons on the adventure page.
The javascript was used to iterate through the arrays of data and set the information, images and links against the correct markers using the lat and lng corordinates for each destination.

I would like to make this more elegant by hosting the data in a separate json file and using js to pull this through to arrays on the fly.

JQuery
The project uses JQuery to simplify DOM manipulation.

Testing

I tested this on a variety of browsers and device types.  I am pleased with the responsiveness of the design and tried to keep it simple layout.  Testing was done manually as there was no calculation on this site and it was mainly about visual appeal and API fucntionality.

I forgot to restrict my API key at first and was notified by Google of this - I went in and restricted this immediately.
When I published the pages first time to Github the map did not work so I went through the javascript console and found the API needed to be authorised to be accessed by git hub pages as well.

The biggest issue I faced was manipulation of the markers.  The resources at https://developers.google.com/maps/documentation was invaulable in walking me through the various scripts required to implement this map and the markers and get them to behave.

One thing I would like to have also done is clear each marker on click of a next marker within each preference set as it is still feeling a little cluttered.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

Deployment
This site site is deployed here: https://flossie38.github.io/Milestone-2/

The google API is restricted both locally and on my Github pages.

<H2>Credits</H2>

Media and Content
The photos used in this site were obtained from:
https://www.lakedistrict.gov.uk/learning/freephotos
Wikipedia
The destination sponsor sites own libraries
The copy content was also picked up from each of the sponsor's own websites as these were linked directly from the google markers.

Acknowledgements
I received inspiration for this project from my holidays in the lake district as achild and have invcluded favourite destinations
