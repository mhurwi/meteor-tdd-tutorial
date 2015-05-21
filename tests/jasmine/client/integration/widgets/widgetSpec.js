describe('creating a widget', function () {

  beforeEach(function() {
    WidgetsCollection.find().forEach( function (widget) {
      WidgetsCollection.remove({_id: widget._id});
    });
  });

  it('clicking the button adds a div', function () {
    // click the button
    $('button#createWidget').click();

    // gather the newly created divs
    $newDivs = $('div.widget');

    // assert the number of new divs
    expect($newDivs.length).toEqual(1);
  });

  it('clicking the button saves a new Widget', function () {
    // First, check that we have 0 documents
    var widget = WidgetsCollection.findOne({});
    expect( widget ).toBe(undefined);

    // click the button
    $('button#createWidget').click();

    // This time, we should have a widget, and its size should be 'medium'
    var widget = WidgetsCollection.findOne({});
    expect( widget.size ).toBe("medium");
  });
});
