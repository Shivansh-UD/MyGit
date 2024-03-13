import java.util.*;
class Multiplier {
    void myMeth1(int x) {
        for (int i = 1; i <= 10; i++) {
            int result=x*i;
            System.out.println(x + " X " + i + " = " + result);
        }
        
    }
}

class MultiTable{
    public static void main(String[] args) {
        System.out.println("Enter a number: \n");
        int num1;
        Scanner s=new Scanner(System.in);
        num1=s.nextInt();
        Multiplier m=new Multiplier();
        m.myMeth1(num1);
        s.close();
        
    }
}