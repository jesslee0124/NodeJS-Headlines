var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
				"header-section" : {
					"heading-title" : "Headlines.",
					"heading-nav1" : "About",
					"heading-nav2" : "Our Services",
					"heading-nav3" : "Our Team",
					"heading-nav4" : "Contact Us"
				},

				"main-section" : {
					"main-heading1" : "We",
					"main-heading2" : "collect and curate",
					"main-heading3" : "articles, opinions, and images",
					"main-heading4" : "from around the world."
				},

				"content-a" : {
					"content-a-heading" : "The Bottom Line.",
					"content-a-description" : "We deliver the news that is relevant to you."
				},

				"content-b" : {
					"content-b-heading" : "Our Expertise.",
				},

				"footer-section" : {
					"footer-heading" : "Headlines.",
					"footer-company-addr1" : "1000 7th Avenue",
					"footer-company-addr2" : "New York, NY",
					"footer-company-phone" : "(484) 192 - 8372"
				}		

			});
});

module.exports = router;
