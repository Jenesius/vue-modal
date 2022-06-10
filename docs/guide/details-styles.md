# Styles

To control the background and position of the modal window, you need to work 
with the css class **.modal-container** . When a modal window is opened, it is 
placed container with the aforementioned class. It has the following properties:
```css
.modal-container{
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: #3e3e3e21;
}
```
For example, let's change the background of the modal and make it open at the bottom:
```css
.modal-container{
    align-items: flex-end;
    background-color: rgba(62, 175, 124, 0.47);
}
```
