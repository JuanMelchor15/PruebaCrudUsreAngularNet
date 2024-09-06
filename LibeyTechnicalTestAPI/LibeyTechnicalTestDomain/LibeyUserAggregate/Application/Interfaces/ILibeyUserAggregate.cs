using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.DTO;
namespace LibeyTechnicalTestDomain.LibeyUserAggregate.Application.Interfaces
{
    public interface ILibeyUserAggregate
    {
        List<LibeyUserResponse> GetAll(string filtro);
        LibeyUserResponse FindResponse(string documentNumber);
        void Create(UserUpdateorCreateCommand command);
        void Update(UserUpdateorCreateCommand command);
        void Delete(string documentNumber);
    }
}