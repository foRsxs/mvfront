import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

export function rangeSlider() {
    let filterPrice = document.querySelector('#range1');
    let filterVol = document.querySelector('#range2');

    let input1 = document.querySelector('#test1');
    let input2 = document.querySelector('#test2');

    let input3 = document.querySelector('#test3');
    let input4 = document.querySelector('#test4');

    let inputs1 = [input1, input2];
    let inputs2 = [input3, input4];

    if(filterPrice) {
        noUiSlider.create(filterPrice, {
            start: [0, 100000],
            connect: true,
            step: 100,
            tooltips: false,
    
            range: {
                'min': 0,
                'max': 100000
            },
            format: {
                from: function(value) {
                    return parseInt(value);
                },
                to: function(value) {
                    return parseInt(value);  
                }
            }
            // format: {
            //     from: wNumb({thousand: ' ', suffix: '₸', }),
            //     to: wNumb({thousand: ' ', suffix: '₸', })
            // }
        });
    
        filterPrice.noUiSlider.on('update', function (values, handle) {
            inputs1[handle].value = `${values[handle]}`;
        });

        inputs1.forEach(function(input, handle) {
            input.addEventListener('change', function() {
                filterPrice.noUiSlider.setHandle(handle, this.value);
            });

            input.addEventListener('keydown', function(e) {
                let values = filterPrice.noUiSlider.get();
                let value = Number(values[handle]);

                let steps = filterPrice.noUiSlider.steps();
                let step = steps[handle];

                let pos;

                switch (e.which) {

                    case 13:
                        filterPrice.noUiSlider.setHandle(handle, this.value);
                        break;
                    case 38: 
                        pos = step[1];

                        if(pos === false) {
                            pos = 1;
                        }

                        if(pos !== null) {
                            filterPrice.noUiSlider.setHandle(handle, value + pos);  
                        }

                        break;
                    case 40:
                        pos = step[0];

                        if(pos === false) {
                            pos = 1;
                        }

                        if(pos !== null) {
                            filterPrice.noUiSlider.setHandle(handle, value - pos);
                        }

                        break;
                }
            });
        });
    }


    if(filterVol) {

        noUiSlider.create(filterVol, {
            start: [100, 500],
            connect: true,
            step: 1,
            tooltips: false,

            range: {
                'min': 100,
                'max': 500
            },
            
            format: {
                from: function(value) {
                    return parseInt(value);
                },
                to: function(value) {
                    return parseInt(value);  
                }
            }
        });

        filterVol.noUiSlider.on('update', function (values, handle) {
            inputs2[handle].value = values[handle];
        });

        inputs2.forEach(function(input, handle) {
            input.addEventListener('change', function() {
                filterVol.noUiSlider.setHandle(handle, this.value);
            });

            input.addEventListener('keydown', function(e) {
                let values = filterVol.noUiSlider.get();
                let value = Number(values[handle]);

                let steps = filterVol.noUiSlider.steps();
                let step = steps[handle];

                let pos;

                switch (e.which) {

                    case 13:
                        filterVol.noUiSlider.setHandle(handle, this.value);
                        break;
                    case 38: 
                        pos = step[1];

                        if(pos === false) {
                            pos = 1;
                        }

                        if(pos !== null) {
                            filterVol.noUiSlider.setHandle(handle, value + pos);  
                        }

                        break;
                    case 40:
                        pos = step[0];

                        if(pos === false) {
                            pos = 1;
                        }

                        if(pos !== null) {
                            filterVol.noUiSlider.setHandle(handle, value - pos);
                        }

                        break;
                }
            });
        });
    }
    
}