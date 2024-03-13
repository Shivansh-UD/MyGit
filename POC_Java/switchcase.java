import java.util.*;


class switchcase{
    public static void main(String[] args) {
        System.out.println("Enter a number: ");
        Scanner s=new Scanner(System.in);
        int day;
        day=s.nextInt();

        switch(day){
            case 1:System.out.println("Today is Monday");
            break;
            case 2:System.out.println("Today is Tuesday");
            break;
            case 3:System.out.println("Today is Wednesday");
            break;
            case 4:System.out.println("Today is Thursday");
            break;
            case 5:System.out.println("Today is Friday");
            break;
            case 6:System.out.println("Today is Saturday");
            break;
            case 7:System.out.println("Today is Sunday");
            break;
            default:System.out.println("Invalid Week number");
        }
    s.close();    
    }
    

}