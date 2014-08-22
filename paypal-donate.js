Polymer('paypal-donate', {
  ready: function() {
    this.setAttribute('lc', this.language.slice(-2))

    if(!this.getAttribute('img-src')) {
      switch(this.size) {
        case 'sm':
        case 'small':
          this.setAttribute('img-src', 'https://www.paypalobjects.com/' + this.language + '/i/btn/btn_donate_SM.gif')
          this.setAttribute('bn', 'PP-DonationsBF:btn_donateCC_' + this.language + '.gif:NonHostedGuest')
          break;
        case 'lg':
        case 'large':
        default:
          cc = this.getAttribute('show-cc') !== null ? 'CC' : ''
          this.setAttribute('img-src', 'https://www.paypalobjects.com/' + this.language + '/i/btn/btn_donate' + cc + '_LG.gif')
          this.setAttribute('bn', 'PP-DonationsBF:btn_donate' + cc + '_' + this.language + '.gif:NonHostedGuest')
          break;
      }
    }
  }
});
