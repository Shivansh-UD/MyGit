import java.util.*;

class Adition
{
     int myMeth1(int x,int y )
    {
        return x+y;
    }

}





class Userinput{
    public static void main(String[] args) {
        System.out.println("please input two number: ");
        Scanner s=new Scanner(System.in);
        int num1=s.nextInt();
        int num2=s. nextInt();


        Adition add=new Adition();
        int result = add.myMeth1(num1, num2);
        System.out.println("Result of addition: " + result);

        s.close();




    }
}
