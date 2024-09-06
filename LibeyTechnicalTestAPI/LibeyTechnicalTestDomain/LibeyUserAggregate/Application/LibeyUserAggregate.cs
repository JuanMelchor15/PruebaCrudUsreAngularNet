using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.DTO;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.Interfaces;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Domain;

namespace LibeyTechnicalTestDomain.LibeyUserAggregate.Application
{
    public class LibeyUserAggregate : ILibeyUserAggregate
    {
        private readonly ILibeyUserRepository _repository;
        public LibeyUserAggregate(ILibeyUserRepository repository)
        {
            _repository = repository;
        }

        public List<LibeyUserResponse> GetAll(string filtro)
        {
            var row = _repository.GetAll();
            return row;
        }

        public LibeyUserResponse FindResponse(string documentNumber)
        {
            var row = _repository.FindResponse(documentNumber);
            return row;
        }

        public void Create(UserUpdateorCreateCommand command)
        {
            LibeyUser addUser = new(command.DocumentNumber,
                                    command.DocumentTypeId,
                                    command.Name,
                                    command.FathersLastName,
                                    command.MothersLastName,
                                    command.Address,
                                    command.UbigeoCode,
                                    command.Phone,
                                    command.Email,
                                    command.Password);

            _repository.Create(addUser);
        }

        public void Update(UserUpdateorCreateCommand command)
        {
            LibeyUser updatedUser = new(
                                        command.DocumentNumber,
                                        command.DocumentTypeId,
                                        command.Name,
                                        command.FathersLastName,
                                        command.MothersLastName,
                                        command.Address,
                                        command.UbigeoCode,
                                        command.Phone,
                                        command.Email,
                                        command.Password
                                       );

            _repository.Update(updatedUser);
        }

        public void Delete(string documentNumber)
        {
            _repository.Delete(documentNumber);
        }
    }
}