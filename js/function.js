
new Vue({ 
    el: '#app', 
        data: { 
              fullname: 'Cristian Dela Vega Betsayda' , 
              dname: '',
              toggleon: false,
              brandname: 'K/TCHAN/SMO',
              brandnameclose: 'footer link',
              nav: 'nav-mobile',
              linkhome: 'link-focus',
              linkproject: 'link-active',
              linkcontact: 'link-active',
              getscreen: 0,
              value: 'none'
          },
          methods: {
              getlink: function(myname){
                return (myname == this.name) ? link1 : link2;
              },
              togglenav: function(){    
                if (this.toggleon == false) {
                  this.value = 'block'
                  this.toggleon = true
                }
                else {
                  this.value = 'none'
                  this.toggleon = false
                }
                
              },
              home: function () {
                this.linkhome = 'link-focus'
                this.linkproject = 'link-active'
                this.linkcontact = 'link-active'
                this.brandname = 'KITCHAN/SMO'
                this.value = 'none'
                this.toggleon = false

              },
               project: function () {
                this.linkhome = 'link-active'
                this.linkproject = 'link-focus'
                this.linkcontact = 'link-active'
                this.brandname = 'PROJECTS'
                this.value = 'none'
                this.toggleon = false
              },
              contact: function () {
                this.linkhome = 'link-active'
                this.linkproject = 'link-active'
                this.linkcontact = 'link-focus'
                this.brandname = 'CONTACT'
                this.value = 'none'
                this.toggleon = false
              },
              mimic: function(event){
                   this.name = event.target.value;
              }
          },

          watch: {
            getscreen: function() {
             
             if (this.getscreen > 800) {
              this.value = 'none'
               this.toggleon = false
             }

             
              
           }
        }
    });