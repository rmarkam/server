'use strict';
/** 
  * controller for user authentication.
*/
app.controller('servicesCtrl', [
	'$scope',
	'$rootScope',
	'$state',
	'$stateParams',
	'$auth',
	'$filter',
	'$http',
	'modal',
	'SweetAlert',
	function($scope, $rootScope, $state, $stateParams, $auth, $filter, $http, modal, SweetAlert){
		var currState = $state.current.name;
		var services = {
			'property':	{
				id   : 'property',
				name : 'Property Management',
				url  : 'services.property_management',
				imgs :  [
							{ 
								url : 'assets/images/carousel/property/01.jpg'
							},{
								url : 'assets/images/carousel/property/02.jpg'
							}
						],
				desc : 'Our service specializes in Post Renovation Cleaning Services, Construction cleaning services, and Neglected property cleaning so we understand the importance of removing the dust and debris after a renovation/construction is completed, our company, is fully prepared to work within your time constraints; ',
				items: [
							{
								id	  : 0,	
								title : 'Buying/Selling Assistance',
								price : false
							},{
								id	  : 1,
								title : 'Property Maintenance',
								price : false
							},{
								id	  : 2,
								title : 'Utility Bill Payments',
								price : false
							},{
								id	  : 3,
								title : 'Statutory Payments',
								price : false
							},{
								id	  : 4,
								title : 'Rental Collection',
								price : false
							},{
								id	  : 5,
								title : 'Tenant Management/Inspections',
								price : false
							},{
								id	  : 6,
								title : 'Home Cleaning & Maintenance',
								price : false
							},{
								id	  : 7,
								title : 'New Construction & Renovation',
								price : false
							},{	
								id	  : 8,
								title :'Electrical, Plumbing & Painting',
								price : false
							},{	
								id	  : 9,
								title : 'Interior Designing',
								price : false
							},{		
								id	  : 10,
								title : 'Encumbrance/Patta & Other Legal Certificates',
								price : false
							}
						],		
				icon : '<span class="fa-stack fa-5x services-fa">'+
							'<i class="fa fa-square-o text-red fa-stack-2x"></i>'+
							'<i class="fa fa-home text-red fa-stack-1x"></i>'+	
					   '</span>',
				faqs :	[
							{
								title : "What is Rental Property Management?",
								ans   : "Many landlords manage properties on their own, while for others, a resident manager or a property management company makes good business sense. If you plan to manage rental property, you’ll need organizational and management skills, along with a good working knowledge about real estate matters. Rental property Management is part of the Property Management Services."
							},{
								title : "Why should I hand over my property to a professional for Property Management?",
								ans   : "Well, there are several reasons to hand over your property to a professional for Property Management. The most important one is the multiple skill levels in all areas including Labor resource and maximize productivity among other things. You will end up gaining in multiple ways. First and foremost you will have peace of mind. You need not have to disturb or request those unwilling relatives or friends. What you need is service. You pay for it and get it. If there is any lapse on the part of the Property Management Company you can ask them straight away. But, the same seems little obligated to ask your friends or relatives and you have to beat around the bush."
							},{
								title : "What are the property management fees?",
								ans   : "What you will pay your Property Manager as Property Management Fees will vary depending on what services you require, the type of property you own, and where your property is located. In general, hiring a property management company is more economical than most people expect, especially when you consider what you get in return without the time commitment of managing a property."
							},{
								title : "How often will the property be inspected?",
								ans   : "Since the tenants will be living in the property we cannot disturb their privacy too often. But we would visit the property at least once in 6 months with prior information to the tenants. We check for any property damage and any other developments concerning the property.We also keep in touch with the tenants over phone."
							},{
								title : "How frequently will I receive reports from Property Management Company?",
								ans   : "The more you are aware with the flow of how things are going with your property, the better it is. As a property manager we will send periodical reports about the property and update collection of rents and payment of taxes on regular basis."
							},{
								title : "How are the vacancies handled? ",
								ans   : "We have paid for premium accounts with various leading property web sites. If required we will also go through other normal practices like releasing classified ads in local newspapers and local real estate net work. We post the properties in our web site and also in social networks. We also put sign boards in and around the property for walk in clients."
							},{
								title : "What are the methods for handling repairs and maintenance?",
								ans   : "First we require a detailed mail with a clean mention of the work to be done. We assess the problem and take quotes from our own network of professionals (mason, carpenters, electrician, painters etc.,) and send a quote to the owners for approval. The rates are very competitive. We also detail the types of repair works we do.. Only after getting the approval from the property owner and payment for the same, we start the work. We will also let the property owner know the exact time frame it will take to complete the job. We report the progress to the owners and if necessary we send photos and videos. On Completion, all the statement of accounts and details of work executed will be given to owners."
							},{
								title : "When we are far away how can we rely on some third party to manage my property?",
								ans   : "When you are considering people to hire, you should consider the recommendations of friends, relatives and other referrals. Jot down all your queries, doubts and contact the company and ask questions. Just as you would screen any business decision, you want to feel confident and trust the person you choose. Talk to them over phone and in person a couple of times if possible. To manage your property – If you pick the right kind of people who can take care of your property and run it well, who wouldn’t outsource?"
							},{
								title : "What are the Checklist for NRI’s buying a property?",
								ans   : "Be aware of the legal aspects of property investment Familiarize yourself with Foreign exchange Management Act (FEMA) Research online and talking with other buyers.Check builder’s delivery and quality performance history. Study the layout plan and amenities to know the open area. Review the penalty clauses in the agreements ( for cancellation, delayed payments) know the project and payment schedule and period between milestones. Check all free items – registration, caretaking, VAT and service Tax. Interact regularly with customer representative for project status."
							},{
								title : "We need Property Tax Assessment for our property. Do Property Management companies do this service? ",
								ans   : "Yes. We assist in getting Property Tax Assessment for your property. We offer this service for our Clients in Chennai and Coimbatore. Building plan approval and document copies has to be provided along with the request for Property Tax assessment."
							},{
								title : "Do u assist in getting Patta and Encumberance certificate (EC)?",
								ans   : "Yes. We do help in acquiring Patta and EC."
							},{
								title : "Why would I pick you over my friends and relatives?",
								ans   : "As we all feel the age old method of falling back on friends and relatives to do the job for you does not work as efficiently in modern times and often causes a rift between relations. Everyone wanted to have their property managed by the subject matter experts. Yedupudi employs qualified personnel to do the homework for you, thus saving your family the trouble and stress of running from pillar to post."
							}
						]   
			},
			'medical': {
				id   : 'medical',
				name : 'Medical Services',
				url  : 'services.medical_services',
				imgs :  [
							{ 
								url : 'assets/images/carousel/medical/01.jpg'
							},{
								url : 'assets/images/carousel/medical/02.jpg'
							}
						],
				desc : "We, through our organization, make arrangements in all fields of medicine from planning, accommodation, appointment with specialists in respective fields, pre-hospitalization and post-hospitalization care for you or for patients whom you desire to be taken care of. We keep track of individual customer status and advice them periodically or provide them Master Health Check-up especially the elderly who by and large feel neglected.",
				items:	[
							{ 
								id	  : 0,
								title : 'Home Health Care',
								price : false
							},{
								id	  : 1,
								title : 'Medicine Delivery',
								price :	false
							},{
								id	  : 2,
								title : 'Laboratory Tests At Home',
								price : false
							},{		
								id	  : 3,
								title : 'Geriatric care',
								price : false
							},{
								id	  : 4,
								title : 'Emergency care',
								price : false
							},{
								id	  : 5,
								title : 'Medical Tourism',
								price :	false
							},{
								id	  : 6,
								title : 'Scheduled Health Checkups – One Time & Recurring',
								price : false
							}
						],
				icon :  '<span class="fa-stack fa-5x services-fa">'+
							'<i class="fa fa-square-o text-red fa-stack-2x"></i>'+
							'<i class="fa fa-ambulance text-red fa-stack-1x"></i>'+	
					   '</span>',
				faqs :	[
							{
								title : "How would Yedupudi help us in health services?",
								ans   : "Our healthcare services look after the health of your family while you are away, since it might not always be possible for you, to be physically present with them. You no longer need to worry about how your family will cope; we see to it that they get the best of emergency care and medical attention on time. You can breathe a sigh of relief knowing that someone responsible is handling everything just the way you would."
							},
							{
								title : "Are u arranging doctors for home visits?",
								ans   : "Yes, we do. We arrange specialized doctors who extend their service in going to the patient’s house for checkups and basic tests. And if needed would do further tests and treatments on call."
							},
							{
								title : "Do you help in home health assistance?",
								ans   : "Parents, grandparents, uncle, aunt, cousin, near and dear ones in India, who are aging, may require regular health checkups. We can accompany the patient from home to Doctor’s Medical Clinic or Hospital as the case maybe and then accompany them back to home. Where needed our Relationship manager will also make necessary appointments with leading Doctor’s of required area of specialization. We can arrange Doctor for home visits depending on the condition of the patient."
							},
							{
								title : "Do you help in medicine delivery?",
								ans   : "Medicine purchase is also a work that may need assistance especially when the patient is aging and not agile enough to run around and buy medicines. Also if a particular medicine is something that needs to be procured in India and delivered out of India we will assist you, however any export of medicine out of India via courier/post is subject to Law in India and yedupudi shall guide you on any specific permissions etc. Where the patient is on regular medication, monthly delivery of medicine can be arranged."
							},
							{
								title : "Does Yedupudi help in laboratory services?",
								ans   : "Yes we do. Laboratory Service is designed to ensure the comfort of your aging parents/ grandparents. There may be a case where your parents/ grandparents are not agile enough to travel to and from laboratory. In that case our Relationship Manager will accompany the patient from their home and take him to the laboratory/hospital and back. We will also facilitate the patient in the required diagnostic tests. Also the report shall be picked up and delivered to Doctor or home as the case maybe. Where needed analysis sample pickup from home will be arranged."
							}
						]	   
			},
			'legal': {
				id   : 'legal',
				name : 'Auditing & Legal Services',
				url  : 'services.legal_services',
				imgs :  [
							{ 
								url : 'assets/images/carousel/legal/01.jpg'
							},{
								url : 'assets/images/carousel/legal/02.jpg'
							}
						],
				desc : "Like you, we'd like to spare your family from running pillar to post to get the documents they need. We realize you're worried about them waiting in Government Departments or dealing with officials to get your documents. Our Relationship Managers handle everything from birth certificates to ration cards covering all mundane activities and paper work with ease.",
				items:	[
							{
								id	  : 0,
								title : 'IT Returns Filing',
								price : false
							},{
								id	  : 1,
								title : 'Arranging Lawyer/Legal Advice',
								price : false
							},{
								id	  : 2,
								title : 'Responding To IT Notice, Tax Notifications',
								price : false
							},{		
								id	  : 3,
								title : 'Court Visits',
								price : false
							},{
								id	  : 4,
								title :'Notarization/Attestation Of Documents',
								price : false
							}	
						],
				icon :  '<span class="fa-stack fa-5x services-fa">'+
							'<i class="fa fa-square-o text-red fa-stack-2x"></i>'+
							'<i class="fa fa-gavel text-red fa-stack-1x"></i>'+	
					   '</span>',
				faqs :	[
							{
								title : "Why would I need a property management company for my property?",
								ans   : "A Property management company takes care of all the effort, time and stress involved in managing one's property."+
										"It nulls out the drawback of distance for NRIs owning properties in India."+
										"With a property management company you manage your property virtually from the comfort of your house."
							},
							{
								title : "Why would I pick you over my friends and relatives?",
								ans   : "As we all feel the age old method of falling back on friends and relatives to do the job for you does not work as efficiently in modern times and often causes a rift between relations. Everyone wanted to have their property managed by the subject matter experts."+
										"NRIServicesOnline employs qualified personnel to do the homework for you, thus saving your family the trouble and stress of running from pillar to post."
							},
							{
								title : "How do I register for the Service ?",
								ans   : "To register with our company you need to create a login and password, and pay the relevant fees."+
										"Our user friendly website will prompt you for a login."
							}
						]	   
			},
			'document':	{
				id   : 'document',
				name : 'Document Procurement',
				url  : 'services.document_procurement',
				imgs :  [
							{ 
								url : 'assets/images/carousel/document/01.jpg'
							},{
								url : 'assets/images/carousel/document/02.jpg'
							}
						],
				desc :	"Our services extend assistance in procuring the necessary documents and needed certificates in various areas. Documents play a vital role in each and every field and we do help in procuring new documents( if lost, damaged or misplaced ).",
				items:	[
							{
								id	  : 0,
								title : 'Birth / Death certificates',
								price : false
							},{
								id	  : 1,
								title : 'Marriage Certificate',
								price : false
							},{
								id	  : 2,
								title : 'PAN Card Application',
								price : false
							},{
								id	  : 3,
								title : 'Other Documents Procurement',
								price : false
							},{
								id	  : 4,
								title : 'Mark sheet/Transcripts/Degree Certificates',
								price : false
							}
						],
				icon :  '<span class="fa-stack fa-5x services-fa">'+
							'<i class="fa fa-square-o text-red fa-stack-2x"></i>'+
							'<i class="fa fa-book text-red fa-stack-1x"></i>'+	
					   '</span>',
				faqs :	[
							{
								title : "Why would I need a property management company for my property?",
								ans   : "A Property management company takes care of all the effort, time and stress involved in managing one's property."+
										"It nulls out the drawback of distance for NRIs owning properties in India."+
										"With a property management company you manage your property virtually from the comfort of your house."
							},
							{
								title : "Why would I pick you over my friends and relatives?",
								ans   : "As we all feel the age old method of falling back on friends and relatives to do the job for you does not work as efficiently in modern times and often causes a rift between relations. Everyone wanted to have their property managed by the subject matter experts."+
										"NRIServicesOnline employs qualified personnel to do the homework for you, thus saving your family the trouble and stress of running from pillar to post."
							},
							{
								title : "How do I register for the Service ?",
								ans   : "To register with our company you need to create a login and password, and pay the relevant fees."+
										"Our user friendly website will prompt you for a login."
							}
						]	   
			},
			'travel':{
				id   : 'travel',
				name : 'Travel & Tourism',
				url  : 'services.travel_services',
				imgs :  [
							{ 
								url : 'assets/images/carousel/travel/01.jpg'
							},{
								url : 'assets/images/carousel/travel/02.jpg'
							}
						],
				desc : "Our service provides customers a tie-up with efficient and reliable travel services giving the best deals and the most innovative products in the industry. We offer you a broad range of best value domestic holidays and tours, along with a variety of other travel services and products that are designed to satisfy the most varied of tastes, desires and requirements. We know you travel all the way to your native place with so much expectation to meet your dear ones and also to visit your favorite places in the stipulated time.",
				items:	[
							{
								id	  : 0,
								title : 'Airport Pick Up/Drop Off',
								price : false
							},{
								id	  : 1,
								title : 'Religious Travel Arrangements',
								price : false
							},{
								id	  : 2,
								title : 'Hotel Accomodation',
								price : false
							},{		
								id	  : 3,
								title : 'Ticket Booking',
								price : false
							},{
								id	  : 4,
								title : 'Vehicle Arrangement During India Trip',
								price : false
							}
						],
				icon :  '<span class="fa-stack fa-5x services-fa">'+
							'<i class="fa fa-square-o text-red fa-stack-2x"></i>'+
							'<i class="fa fa-plane text-red fa-stack-1x"></i>'+	
					   '</span>',
				faqs :	[
							{
								title : "Why Yedupudi for tour packages?",
								ans   : " Our team of tour planners and designers, expert tour organizers and professional tour guides together with our friendly staff members, strive to give the guests an authentic and rich holiday experience. We offer a complete travel management, in other words everything from planning to execution of tours. Whether you are a large corporate client demanding custom travel services or an individual traveler looking for a weekend getaway, you will always receive our professional and personal attention."
							},
							{
								title : "Are you operating  on your own?",
								ans   : "No. We have very good tie ups with the most renowned group of people who organize customized packages for pilgrimage or for entertainment, reunion etc."
							},
							{
								title : "Do you handle Hotel bookings in TamilNadu?",
								ans   : "Hotel Accommodations in India can be arranged even while you are abroad. You can locate a suitable hotel of your choice and weI will reserve it for you OR give us your requirements and we will choose the right hotel for you."
							},
							{
								title : "Do you arrange on travel plan?",
								ans   : "Based on your requirements we arrange sight-seeing / adventure trips to meet your travel plan. Alternatively we can offer packaged tour through our business partners."
							}
						]	   
			},
			'education':{
				id 	 : 'education',
				name : 'Education & Tracking',
				url  : 'services.education_tracking',
				imgs :  [
							{ 
								url : 'assets/images/carousel/education/01.jpg'
							},{
								url : 'assets/images/carousel/education/02.jpg'
							}
						],
				desc : "The most valuable service extended from our company to give you a personal care for your loved ones who come here for education. Our team provides academic advising and counseling to users of educational benefits. Our service helps ease family’s transition and contributes to a successful assignment. We provide support and assistance in educational counseling services. We keep track of their educational and personal needs and thereby give guidelines for their success.",
				items:	[
							{
								id	  : 0,
								title : 'Monitoring Student (Academic and Personal)',
								price : false
							},{
								id	  : 1,
								title : 'Setup And Monitor Coaching Classes, Tuition And Hostel',
								price : false
							},{
								id	  : 2,
								title :	'Admissions To Schools/Colleges',
								price : false
							},{
								id	  : 3,
								title : 'Fee payments',
								price : false
							}
						],
				icon :  '<span class="fa-stack fa-5x services-fa">'+
							'<i class="fa fa-square-o text-red fa-stack-2x"></i>'+
							'<i class="fa fa-graduation-cap text-red fa-stack-1x"></i>'+	
					   '</span>',
				faqs :	[
							{
								title : "What are the services extended in this field?",
								ans   : "NRI whose kids are getting educated back home in India need to keep track of the fee payment for School/College/Hostel/Coaching Classes/Tuition as the case maybe. Yedupudi is here to assist you, we will keep track of the all the different fee payments for your kids on monthly, quarterly, annually or as the case maybe. Once we are been informed of the dues, we will take charge and be responsible for alerting you timely to avoid hefty late fee payments. We will ensure that timely remittances of all regular educational & related fee payments are taken care of."
							},
							{
								title : "Will Yedupudi help in monitoring the students?",
								ans   : "NRI parents are always worried of their children studying back home in India. Monitoring the progress, performance, general activities & attendance has been a major concern for NRI's. Our team is here to assist; we will collect all these information and update you at regular intervals. Prevention is better than cure; we will give early intimation if a corrective measure needs to be taken."
							}
						]	   
			}
		};
		
		if(currState==='services.home')
		{
			var servicesArray = [];
			for(var key in services){
				servicesArray.push(services[key]);
			}
			$scope.services = servicesArray;
		}
		if(currState==='services.property_management')
		{
			$scope.service = services['property'];
			$scope.oneAtATime = true;
		}
		if(currState==='services.medical_services')
		{
			$scope.service = services['medical'];
			$scope.oneAtATime = true;
		}
		if(currState==='services.legal_services')
		{
			$scope.service = services['legal'];
			$scope.oneAtATime = true;
		}
		if(currState==='services.document_procurement')
		{
			$scope.service = services['document'];
			$scope.oneAtATime = true;
		}
		if(currState==='services.travel_services')
		{
			$scope.service = services['travel'];
			$scope.oneAtATime = true;
		}if(currState==='services.education_tracking')
		{
			$scope.service = services['education'];
			$scope.oneAtATime = true;
		}
		
		var successAlert = function (message) {
			SweetAlert.swal({
				title: message.title,
				text: message.text,
				type: "success",
				confirmButtonColor: "#007AFF",
				}
			);
		};
		
		var errorAlert = function (message) {
			SweetAlert.swal({
				title: message.title,
				text: message.text,
				type: "warning",
				confirmButtonColor: "#DD6B55",
				}
			);
		};
		
		$scope.openQuoteModal = function(serviceId){
			var id = 'quoteModal';
			var templateUrl = 'quoteModal.html';
			var controller = 'servicesCtrl';
			$scope.quote = {};
			$scope.quote['service'] = serviceId;
			$scope.quote.items = services[serviceId].items;
			$scope.serviceId = serviceId;
			
			if($auth.isAuthenticated()){
				var user = $auth.getPayload();
				$scope.quote.name = user.name;	
				$scope.quote.email = user.email;	
				$scope.quote.phone = user.phone;	
			}
			
			modal.open(id, templateUrl, controller, $scope);
		};
		
		$scope.cancelQuoteModal = function(id, state){
			if(state)
			{
				modal.close(id);
				$state.go(state);
			}	
			modal.close(id);
		};
		
		$scope.requestQuote = function(param){
			var quote = $scope.quote;
			var selectedItems = [];
			if(param!=='query'){
				$scope.quote.items.forEach(function (item){
					if(item.selected == true){
						selectedItems.push(item.title);
					}
				});
				quote.items = selectedItems; 
			}
			console.log(quote);
			$http.post('/quote', quote).then(function(response) {
				$scope.quote = {};
				$scope.Form.$setPristine();
				if(modal.isOpen('quoteModal')){
					modal.close('quoteModal');
				}
				var message = {};
				message.title = 'Info';
				message.text = 'We have recieved your request. We\'ll get back to you shortly.';
				successAlert(message);
			}, function(response) {
				if(modal.isOpen('quoteModal')){
					modal.close('quoteModal');
				}
				
				var message = {};
				message.title = 'Oops!';
				message.text = 'We seem to be having some trouble. Please try again later.';
				errorAlert(message);	
			}
		)};	
}])