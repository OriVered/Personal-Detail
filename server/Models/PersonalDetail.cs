public class PersonalDetail
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }

    public PersonalDetail()
    {
        FirstName = "";
        LastName = "";
        Email = "";
    }
}