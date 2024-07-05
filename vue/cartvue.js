document.addEventListener("DOMContentLoaded", function() {
  var i =0;

    var vm = new Vue({
      el: '#app',
      data: {
        items: [],
        itemsPerPage: 8,
        currentPage: 1
      },
      computed: {
        paginatedItems() {
          const start = (this.currentPage - 1) * this.itemsPerPage;
          const end = this.currentPage * this.itemsPerPage;
          return this.items.slice(start, end);
        }
      },
      created() {
        let apiURL = "https://fakestoreapi.com/products";
        axios.get(apiURL).then(res => {
          this.items = res.data;
          this.bindJQueryEvents();
        });
      },
      updated() {
        // Re-bind jQuery events when data is updated
        this.bindJQueryEvents();
        this.page();
        this.cleancart();
      },
      methods: {
        bindJQueryEvents() {
          $('.card-text').off('click').on('click', function() {
            $(this).css('height', 'auto');
          });
        },
        page(pic,title,describe,price){
            $('.pic').css('backgroundImage','url('+ pic+')');
            $('.text-center').text(title);
            $('.describe').text(describe);
            $('.detilprice').text("$"+price);
            $('.productname').val(title);
            $('.productpic').val(pic);
            $('.number').val(1)
            $('.number').on('input', function() {
                var numberValue = $(this).val();
                $('.detilprice').text('$' +(price * numberValue).toFixed(2));
            });
        },
        
        addcart(){
          var number=$('.number').val()
          var pic=$('.productpic').val();
          var title=$('.productname').val();
          var cartprice=$('.detilprice').text();
            $('.cartcontent').append(
'<div class="row"><div class="col-md-1 carttitle">'+number+' </div><div class="col-md-3 cartpic"><img src="'+pic+'" alt=""></div><div class="col-md-4 carttitle">'+title+'</div><div class="col-md-4 carttitle">'+cartprice+'</div></div><hr>'
            );
            i=i+1
            $('.cartbtn').text("cart"+i)
        },
        cleancart(){
          $('.cleancartbtn').click(function(){
            $('.cartcontent').html('');
            i=0
            $('.cartbtn').text("cart")
          })
           
        },
        loadMore(page) {
          this.currentPage=page;
        }
      }
    });
  });
  