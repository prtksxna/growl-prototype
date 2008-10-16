var Growl = Class.create({
  initialize: function(folder){
    this.n = 0; //Its only to help in giving the ID's to DIV's
    this.imageFolder = folder || "images/"; //Choose the images folder given by user or use default
    this.keeper = new Element('div', {'class': 'growl-keeper', 'id': 'growl_keeper' }); //Create a container where
    $(document.body).insert({bottom: this.keeper});
  },
  display: function(text){
    this.n++;
    var gid = "growl-alert-"+this.n, opt = Object.extend({image: "asterisk_orange.png",delay: 5}, arguments[1] || {});
    this.keeper.insert({bottom: new Element('div', {'class': "growl-alert",  'id': gid})});
    $(gid).insert({top: new Element('img',{'class':'growl-icon', 'src': this.imageFolder+""+opt.image}), bottom: new Element('p', {'class': 'growl-text'}).update(text.capitalize())}).setOpacity(0).appear({to: 0.8}).observe('click',function() {new Effect.DropOut(this.id)}).setPngBackground(opt.image,{ backgroundColor: '#000000'});
    Effect.DropOut.delay(opt.delay, gid);
		return $(gid);
  }
});