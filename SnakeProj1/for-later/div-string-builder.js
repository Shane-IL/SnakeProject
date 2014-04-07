/**
 * Created by Shane on 07/04/2014.
 */
var sb = new StringBuilder();

sb.append('<div class="design-element">');
{
    sb.append('<div class="element-main-box positioned">');
    {

        sb.append('<div class="element-background-layer positioned absolute-fill element-border-target design-element-border-target">');
        {
            sb.conditionalAppend(isExplorerMode, '<div class="element-background-target-explorer"></div>');
        }
        sb.append('</div>');
        sb.append('<div class="element-border-box element-border-target positioned">');
        {
            sb.append('<div class="header-section page-section positioned"></div>');
            sb.append('<div class="element-content-box element-padding-box positioned" >');
            {
                sb.append('<div class="element-size-box positioned">');
                {
                    sb.conditionalAppend(isDesigner, '<div class="content-marking content-marking-back"></div>');
                    sb.conditionalAppend(isDesigner, '<div class="content-marking content-marking-front"></div>');
                    sb.append('<div class="page-content-container absolute-fill"></div>');
                }
                sb.append('</div>');
            }
            sb.append('</div>');
            sb.append('<div class="footer-section page-section positioned"></div>');
        }
        sb.append('</div>');

    }
    sb.append('</div>');

}
sb.append('</div>');